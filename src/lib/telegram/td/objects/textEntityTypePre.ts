import * as z from "zod/v4";

export const textEntityTypePre = z.object({
  "@type": z.literal("textEntityTypePre"),
});

export type TextEntityTypePre = z.infer<typeof textEntityTypePre>;
