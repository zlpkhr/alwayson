import * as z from "zod/v4";

export const textEntityTypeBotCommand = z.object({
  "@type": z.literal("textEntityTypeBotCommand"),
});

export type TextEntityTypeBotCommand = z.infer<typeof textEntityTypeBotCommand>;
