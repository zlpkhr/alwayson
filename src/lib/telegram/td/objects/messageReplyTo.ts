import * as z from "zod/v4";
import { messageReplyToMessage } from "./messageReplyToMessage";
import { messageReplyToStory } from "./messageReplyToStory";

export const messageReplyTo = z.discriminatedUnion("@type", [
  messageReplyToMessage,
  messageReplyToStory,
]);

export type MessageReplyTo = z.infer<typeof messageReplyTo>;
