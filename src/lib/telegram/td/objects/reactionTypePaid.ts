import * as z from "zod/v4";

export const reactionTypePaid = z.object({
  "@type": z.literal("reactionTypePaid"),
});

export type ReactionTypePaid = z.infer<typeof reactionTypePaid>;
