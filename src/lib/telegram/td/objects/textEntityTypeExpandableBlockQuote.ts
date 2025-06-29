import * as z from "zod/v4";

export const textEntityTypeExpandableBlockQuote = z.object({
  "@type": z.literal("textEntityTypeExpandableBlockQuote"),
});

export type TextEntityTypeExpandableBlockQuote = z.infer<
  typeof textEntityTypeExpandableBlockQuote
>;
