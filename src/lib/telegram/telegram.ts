import type TdClient from "tdweb";
import type { TdError, TdObject } from "tdweb";
import { match } from "ts-pattern";
import { chatSchema, chatsSchema } from "./schemas/chats";

type GetChatOpts = {
  limit?: number;
};

type GetChatHistoryOpts = {
  chatId: number;
  fromMessageId: number;
  offset?: number;
  limit?: number;
  onlyLocal?: boolean;
};

type GetMessagesOpts = {
  chatId: number;
  limit?: number;
};

export type TelegramOpts = {
  apiID: string;
  apiHash: string;
};

export default class Telegram extends EventTarget {
  #opts: TelegramOpts;
  #tdClient: TdClient;

  constructor(opts: TelegramOpts) {
    super();

    this.#opts = Object.freeze(opts);
    this.#tdClient = new tdweb.default({
      jsLogVerbosityLevel: "error",
      onUpdate: (update) => {
        this.dispatchEvent(new CustomEvent("update", { detail: update }));
      },
    });
  }

  async getChats(opts: GetChatOpts = { limit: 10 }): Promise<{
    chatIDs: number[];
    totalCount: number;
  }> {
    const result = await this.send({
      "@type": "getChats",
      limit: opts.limit,
    });

    return chatsSchema.parseAsync(result);
  }

  async getChat(chatId: number) {
    const result = await this.send({
      "@type": "getChat",
      chat_id: chatId,
    });

    return chatSchema.parseAsync(result);
  }

  async getChatHistory(opts: GetChatHistoryOpts) {
    const {
      chatId,
      fromMessageId,
      offset = 0,
      limit = 10,
      onlyLocal = false,
    } = opts;

    const result = await this.send({
      "@type": "getChatHistory",
      chat_id: chatId,
      from_message_id: fromMessageId,
      offset,
      limit,
      only_local: onlyLocal,
    });

    return result;
  }

  async getMessages(opts: GetMessagesOpts) {
    const { chatId, limit = 10 } = opts;

    // Fetch the last `limit` messages from the chat, handling pagination if needed
    let fromMessageId = 0;
    let left = limit;
    let result: any[] = [];

    while (left > 0) {
      const history = await this.getChatHistory({
        chatId,
        fromMessageId,
        offset: 0,
        limit: left,
        onlyLocal: false,
      });

      // history.messages may be undefined or empty
      const messages = history.messages ?? [];
      if (messages.length === 0) {
        // No more messages to fetch
        break;
      }

      result = result.concat(messages);

      // Prepare for next batch: set fromMessageId to the last message's id
      fromMessageId =
        messages[messages.length - 1].id ??
        messages[messages.length - 1].message_id;

      left -= messages.length;
    }

    return result;
  }

  async sendMessage(chatId: number, text: string) {
    return await this.send({
      "@type": "sendMessage",
      chat_id: chatId,
      message_thread_id: 0,
      reply_to: undefined,
      options: undefined,
      reply_markup: undefined,
      input_message_content: {
        "@type": "inputMessageText",
        text: {
          "@type": "formattedText",
          text: text,
          entities: [],
        },
        link_preview_options: undefined,
        clear_draft: false,
      },
    });
  }

  async send(query: TdObject): Promise<TdObject> {
    const result = await this.#tdClient.send(query);

    if (isTdError(result)) {
      throw new TelegramError(result);
    }

    return result;
  }
}

class TelegramError extends Error {
  code: number;

  constructor(error: TdError) {
    super(error.message);
    this.code = error.code;
  }
}

function isTdError(result: TdObject | TdError): result is TdError {
  return result["@type"] === "error";
}

export const telegram = new Telegram({
  apiID: import.meta.env.VITE_TELEGRAM_API_ID,
  apiHash: import.meta.env.VITE_TELEGRAM_API_HASH,
});

telegram.addEventListener("update", (event: CustomEvent<TdObject>) => {
  const update = event.detail;

  match(update["@type"]).with("updateAuthorizationState", () => {
    match(update.authorization_state)
      .with({ "@type": "authorizationStateWaitTdlibParameters" }, () => {
        telegram.send({
          "@type": "setTdlibParameters",
          database_directory: "tdlib",
          use_message_database: true,
          use_secret_chats: false,
          api_id: parseInt(import.meta.env.VITE_TELEGRAM_API_ID),
          api_hash: import.meta.env.VITE_TELEGRAM_API_HASH,
          system_language_code: "en",
          device_model: navigator.userAgent,
          application_version: "0.0.1",
        });
      })
      .with({ "@type": "authorizationStateWaitPhoneNumber" }, () => {
        const phoneNumber = prompt("Enter your phone number");

        if (!phoneNumber) return;

        telegram.send({
          "@type": "setAuthenticationPhoneNumber",
          phone_number: phoneNumber,
        });
      })
      .with({ "@type": "authorizationStateWaitCode" }, () => {
        const code = prompt("Enter the code");
        if (!code) return;

        telegram.send({
          "@type": "checkAuthenticationCode",
          code,
        });
      });
  });
});
