import * as z from "zod/v4";
import { error } from "./error";

export const messageSendingStateFailed = z.object({
  "@type": z.literal("messageSendingStateFailed"),
  error: error,
  can_retry: z.boolean(),
  need_another_sender: z.boolean(),
  need_another_reply_quote: z.boolean(),
  need_drop_reply: z.boolean(),
  required_paid_message_star_count: z.int(),
  retry_after: z.number(),
});

export type MessageSendingStateFailed = z.infer<
  typeof messageSendingStateFailed
>;
