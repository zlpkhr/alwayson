/**
 * TDLib "messagePoll" – a message containing a poll.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_poll.html
 */
import { z } from "zod/v4";

export const poll = z.object({
  "@type": z.literal("poll"),
  id: z.number().int(),
  question: z.string(),
  options: z.array(z.object({
    text: z.string(),
    voter_count: z.number().int(),
  })),
  total_voter_count: z.number().int(),
  is_closed: z.boolean(),
  is_anonymous: z.boolean(),
  // There are many more fields; omitted for brevity
});
export type Poll = z.infer<typeof poll>;

export const messagePoll = z.object({
  "@type": z.literal("messagePoll"),
  poll,
});
export type MessagePoll = z.infer<typeof messagePoll>;