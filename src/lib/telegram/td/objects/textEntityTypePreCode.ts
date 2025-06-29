import * as z from "zod/v4";

export const textEntityTypePreCode = z.object({
  "@type": z.literal("textEntityTypePreCode"),
  language: z.string(),
});

export type TextEntityTypePreCode = z.infer<typeof textEntityTypePreCode>;
