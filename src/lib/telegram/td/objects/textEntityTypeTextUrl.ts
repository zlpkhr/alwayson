import * as z from "zod/v4";

export const textEntityTypeTextUrl = z.object({
  "@type": z.literal("textEntityTypeTextUrl"),
  url: z.string(),
});

export type TextEntityTypeTextUrl = z.infer<typeof textEntityTypeTextUrl>;
