import * as z from "zod/v4";

export const textEntityTypeBold = z.object({
  "@type": z.literal("textEntityTypeBold"),
});

export type TextEntityTypeBold = z.infer<typeof textEntityTypeBold>;
