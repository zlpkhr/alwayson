import * as z from "zod/v4";
import { messages } from "../objects/messages";

export const getChatHistory = z.object({
  "@type": z.literal("getChatHistory"),
  chat_id: z.int(),
  from_message_id: z.int(),
  offset: z.int().gte(-99).lte(0),
  limit: z.int().positive().lte(100),
  only_local: z.boolean(),
});

export type GetChatHistoryQuery = z.infer<typeof getChatHistory>;

export const getChatHistoryResult = messages;
