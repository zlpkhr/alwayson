import type { Fn, Message, Up, Update } from "tdtype";
import type TdClient from "tdweb";
import type { TdError, TdObject } from "tdweb";

export type TdOpts = {
  apiID: string;
  apiHash: string;
};

export default class TD {
  #opts: TdOpts;
  #et: EventTarget;
  #client: TdClient;
  #readyPromise: Promise<void>;

  static #createClient(onUpdate: (update: Update) => void) {
    return new tdweb.default({
      jsLogVerbosityLevel: "error",
      onUpdate: onUpdate as (update: TdObject) => void,
    });
  }

  constructor(opts: TdOpts) {
    this.#opts = Object.freeze(opts);
    this.#et = new EventTarget();
    this.#client = TD.#createClient((update) => {
      this.#et.dispatchEvent(new CustomEvent("update", { detail: update }));
    });

    this.#readyPromise = new Promise((resolve) => {
      this.#et.addEventListener("update", async (ev) => {
        const event = ev as CustomEvent<Update>;
        const update = event.detail;

        if (
          update["@type"] === "updateAuthorizationState" &&
          update.authorization_state["@type"] ===
            "authorizationStateWaitTdlibParameters"
        ) {
          await this.send({
            "@type": "setTdlibParameters",
            api_id: parseInt(this.#opts.apiID),
            api_hash: this.#opts.apiHash,
            use_test_dc: false,
            database_directory: "tdlib",
            files_directory: "",
            database_encryption_key: "",
            use_file_database: true,
            use_chat_info_database: true,
            use_message_database: true,
            use_secret_chats: false,
            system_language_code: "en",
            device_model: navigator.userAgent,
            system_version: "",
            application_version: "0.0.1",
          });

          resolve();
        }
      });
    });
  }

  async send<K extends keyof Fn>(
    query: { "@type": K } & Parameters<Fn[K]>[0],
  ): Promise<ReturnType<Fn[K]>> {
    const result = await this.#client.send(query as TdObject);

    if (isTdError(result)) {
      throw new TelegramError(result);
    }

    return result as ReturnType<Fn[K]>;
  }

  async on<K extends keyof Up>(name: K, handler: (update: Up[K]) => void) {
    await this.#readyPromise;

    const controll = new AbortController();

    this.#et.addEventListener(
      "update",
      (ev) => {
        const event = ev as CustomEvent<Update>;

        if (event.detail["@type"] === name) {
          handler(event.detail as Up[K]);
        }
      },
      { signal: controll.signal },
    );

    return () => {
      controll.abort();
    };
  }

  async getChatIDs(opts?: { limit?: number }) {
    const { limit = 10 } = opts ?? {};

    const result = await this.send({
      "@type": "getChats",
      limit,
    });

    return result.chat_ids;
  }

  async getChat(chatId: number) {
    return await this.send({
      "@type": "getChat",
      chat_id: chatId,
    });
  }

  async getChatHistory(opts: {
    chatId: number;
    fromMessageId: number;
    offset?: number;
    limit?: number;
  }) {
    const { chatId, fromMessageId, offset = 0, limit = 10 } = opts ?? {};

    const result = await this.send({
      "@type": "getChatHistory",
      chat_id: chatId,
      from_message_id: fromMessageId,
      offset,
      limit,
      only_local: false,
    });

    return result;
  }

  async getMessages(opts: { chatId: number; limit?: number }) {
    const { chatId, limit = 10 } = opts;

    let fromMessageId = 0;
    let left = limit;
    let result: Message[] = [];

    while (left > 0) {
      const history = await this.getChatHistory({
        chatId,
        fromMessageId,
        offset: 0,
        limit: left,
      });

      const messages = history.messages;

      if (messages.length === 0) {
        break;
      }

      result = result.concat(messages);

      fromMessageId = messages[messages.length - 1].id;

      left -= messages.length;
    }

    return result;
  }

  async sendMessage(chatId: number, text: string) {
    return await this.send({
      "@type": "sendMessage",
      chat_id: chatId,
      message_thread_id: 0,
      input_message_content: {
        "@type": "inputMessageText",
        text: {
          "@type": "formattedText",
          text: text,
          entities: [],
        },
        clear_draft: false,
      },
    });
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
