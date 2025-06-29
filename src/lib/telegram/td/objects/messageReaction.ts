import * as z from "zod/v4";
import { messageSender } from "./messageSender";
import { reactionType } from "./reactionType";

export const messageReaction = z.object({
  "@type": z.literal("messageReaction"),
  type: reactionType,
  total_count: z.number(),
  is_chosen: z.boolean(),
  used_sender_id: messageSender.optional(),
  recent_sender_ids: z.array(messageSender),
});

export type MessageReaction = z.infer<typeof messageReaction>;
