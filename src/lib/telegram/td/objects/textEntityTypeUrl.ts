import * as z from "zod/v4";

export const textEntityTypeUrl = z.object({
  "@type": z.literal("textEntityTypeUrl"),
});

export type TextEntityTypeUrl = z.infer<typeof textEntityTypeUrl>;
