import * as z from "zod/v4";

export const reactionTypeCustomEmoji = z.object({
  "@type": z.literal("reactionTypeCustomEmoji"),
  custom_emoji_id: z.bigint(),
});

export type ReactionTypeCustomEmoji = z.infer<typeof reactionTypeCustomEmoji>;
