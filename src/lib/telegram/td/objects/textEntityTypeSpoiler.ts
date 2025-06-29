import * as z from "zod/v4";

export const textEntityTypeSpoiler = z.object({
  "@type": z.literal("textEntityTypeSpoiler"),
});

export type TextEntityTypeSpoiler = z.infer<typeof textEntityTypeSpoiler>;
