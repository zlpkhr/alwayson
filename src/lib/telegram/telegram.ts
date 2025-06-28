import type TdClient from "tdweb";
import type { TdError, TdObject } from "tdweb";
import { chatsSchema } from "./schemas/chats";

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

export default class Telegram {
  #tdClient: TdClient;

  constructor(tdClient: TdClient) {
    this.#tdClient = tdClient;
  }

  async getChats(opts: GetChatOpts = { limit: 10 }): Promise<{
    chatIDs: number[];
    totalCount: number;
  }> {
    const result = await this.#send({
      "@type": "getChats",
      limit: opts.limit,
    });

    return chatsSchema.parseAsync(result);
  }

  async getChatHistory(opts: GetChatHistoryOpts) {
    const {
      chatId,
      fromMessageId,
      offset = 0,
      limit = 10,
      onlyLocal = false,
    } = opts;

    const result = await this.#send({
      "@type": "getChatHistory",
      chat_id: chatId,
      from_message_id: fromMessageId,
      offset,
      limit,
      only_local: onlyLocal,
    });

    return result;
  }

  async #send(query: TdObject): Promise<TdObject> {
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
