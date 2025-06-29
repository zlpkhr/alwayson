import * as z from "zod/v4";
import { messageSender } from "./messageSender";

export const messageReplyInfo = z.object({
  "@type": z.literal("messageReplyInfo"),
  reply_count: z.int(),
  recent_replier_ids: z.array(messageSender),
  last_read_inbox_message_id: z.int(),
  last_read_outbox_message_id: z.int(),
  last_message_id: z.int(),
});

export type MessageReplyInfo = z.infer<typeof messageReplyInfo>;
