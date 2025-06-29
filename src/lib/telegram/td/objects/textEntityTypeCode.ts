import * as z from "zod/v4";

export const textEntityTypeCode = z.object({
  "@type": z.literal("textEntityTypeCode"),
});

export type TextEntityTypeCode = z.infer<typeof textEntityTypeCode>;
