import * as z from "zod/v4";

export const textEntityTypeUnderline = z.object({
  "@type": z.literal("textEntityTypeUnderline"),
});

export type TextEntityTypeUnderline = z.infer<typeof textEntityTypeUnderline>;
