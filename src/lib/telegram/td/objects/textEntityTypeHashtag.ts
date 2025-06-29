import * as z from "zod/v4";

export const textEntityTypeHashtag = z.object({
  "@type": z.literal("textEntityTypeHashtag"),
});

export type TextEntityTypeHashtag = z.infer<typeof textEntityTypeHashtag>;
