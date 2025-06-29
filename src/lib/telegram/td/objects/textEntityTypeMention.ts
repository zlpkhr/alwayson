import * as z from "zod/v4";

export const textEntityTypeMention = z.object({
  "@type": z.literal("textEntityTypeMention"),
});

export type TextEntityTypeMention = z.infer<typeof textEntityTypeMention>;
