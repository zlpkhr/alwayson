import * as z from "zod/v4";

export const textEntityTypeItalic = z.object({
  "@type": z.literal("textEntityTypeItalic"),
});

export type TextEntityTypeItalic = z.infer<typeof textEntityTypeItalic>;
