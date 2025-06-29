import * as z from "zod/v4";
import { messageReaction } from "./messageReaction";
import { paidReactor } from "./paidReactor";

export const messageReactions = z.object({
  "@type": z.literal("messageReactions"),
  reactions: z.array(messageReaction),
  are_tags: z.boolean(),
  paid_reactors: z.array(paidReactor),
  can_get_added_reactions: z.boolean(),
});

export type MessageReactions = z.infer<typeof messageReactions>;
