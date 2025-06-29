import * as z from "zod/v4";
import { messageOrigin } from "./messageOrigin";
import { textQuote } from "./textQuote";

export const messageReplyToMessage = z.object({
  "@type": z.literal("messageReplyToMessage"),
  chat_id: z.int(),
  message_id_: z.int(),
  quote: textQuote.optional(),
  origin: messageOrigin.optional(),
  origin_send_date: z.int(),
  content: z.unknown().optional(),
});

export type MessageReplyToMessage = z.infer<typeof messageReplyToMessage>;
