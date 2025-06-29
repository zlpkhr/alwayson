import * as z from "zod/v4";

export const textEntityTypeBlockQuote = z.object({
  "@type": z.literal("textEntityTypeBlockQuote"),
});

export type TextEntityTypeBlockQuote = z.infer<typeof textEntityTypeBlockQuote>;
