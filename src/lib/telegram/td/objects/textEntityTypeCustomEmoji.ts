import * as z from "zod/v4";

export const textEntityTypeCustomEmoji = z.object({
  "@type": z.literal("textEntityTypeCustomEmoji"),
  custom_emoji_id: z.bigint(),
});

export type TextEntityTypeCustomEmoji = z.infer<
  typeof textEntityTypeCustomEmoji
>;
