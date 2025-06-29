import * as z from "zod/v4";

export const textEntityTypeMediaTimestamp = z.object({
  "@type": z.literal("textEntityTypeMediaTimestamp"),
  media_timestamp: z.int(),
});

export type TextEntityTypeMediaTimestamp = z.infer<
  typeof textEntityTypeMediaTimestamp
>;
