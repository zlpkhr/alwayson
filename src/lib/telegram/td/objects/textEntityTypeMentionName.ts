import * as z from "zod/v4";

export const textEntityTypeMentionName = z.object({
  "@type": z.literal("textEntityTypeMentionName"),
  user_id: z.int(),
});

export type TextEntityTypeMentionName = z.infer<
  typeof textEntityTypeMentionName
>;
