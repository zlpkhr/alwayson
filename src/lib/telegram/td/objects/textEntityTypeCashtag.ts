import * as z from "zod/v4";

export const textEntityTypeCashtag = z.object({
  "@type": z.literal("textEntityTypeCashtag"),
});

export type TextEntityTypeCashtag = z.infer<typeof textEntityTypeCashtag>;
