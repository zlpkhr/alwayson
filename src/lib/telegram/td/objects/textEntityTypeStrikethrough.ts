import * as z from "zod/v4";

export const textEntityTypeStrikethrough = z.object({
  "@type": z.literal("textEntityTypeStrikethrough"),
});

export type TextEntityTypeStrikethrough = z.infer<
  typeof textEntityTypeStrikethrough
>;
