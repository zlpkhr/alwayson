import * as z from "zod/v4";

export const reactionTypeEmoji = z.object({
  "@type": z.literal("reactionTypeEmoji"),
  emoji: z.string(),
});

export type ReactionTypeEmoji = z.infer<typeof reactionTypeEmoji>;
