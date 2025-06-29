import * as z from "zod/v4";
import { messageOriginChannel } from "./messageOriginChannel";
import { messageOriginChat } from "./messageOriginChat";
import { messageOriginHiddenUser } from "./messageOriginHiddenUser";
import { messageOriginUser } from "./messageOriginUser";

export const messageOrigin = z.discriminatedUnion("@type", [
  messageOriginChannel,
  messageOriginChat,
  messageOriginHiddenUser,
  messageOriginUser,
]);

export type MessageOrigin = z.infer<typeof messageOrigin>;
