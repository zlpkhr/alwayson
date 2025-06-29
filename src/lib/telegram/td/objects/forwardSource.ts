import * as z from "zod/v4";
import { messageSender } from "./messageSender";

export const forwardSource = z.object({
  "@type": z.literal("forwardSource"),
  chat_id: z.int(),
  message_id: z.int(),
  sender_id: messageSender.optional(),
  sender_name: z.string(),
  date: z.int(),
  is_outgoing: z.boolean(),
});

export type ForwardSource = z.infer<typeof forwardSource>;
