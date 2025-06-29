import * as z from "zod/v4";
import { messageSender } from "./messageSender";
import { reactionType } from "./reactionType";

export const unreadReaction = z.object({
  "@type": z.literal("unreadReaction"),
  type: reactionType,
  sender_id: messageSender,
  is_big: z.boolean(),
});

export type UnreadReaction = z.infer<typeof unreadReaction>;
