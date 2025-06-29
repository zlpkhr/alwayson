import * as z from "zod/v4";
import { messageReplyToStory } from "./messageReplyToStory";

export const messageReplyTo = z.discriminatedUnion("@type", [
  messageReplyToStory,
]);

export type MessageReplyTo = z.infer<typeof messageReplyTo>;
