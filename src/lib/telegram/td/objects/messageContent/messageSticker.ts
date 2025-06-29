/**
 * TDLib "messageSticker" – a sticker message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sticker.html
 */
import { z } from "zod/v4";

// Minimal sticker object. Full sticker schema is large; we capture key fields.
export const sticker = z.object({
  "@type": z.literal("sticker"),
  set_id: z.number().int().optional(),
  width: z.number().int(),
  height: z.number().int(),
  is_animated: z.boolean().optional(),
  is_video: z.boolean().optional(),
  // underlying file placeholder
  sticker: z.unknown().optional(),
});
export type Sticker = z.infer<typeof sticker>;

export const messageSticker = z.object({
  "@type": z.literal("messageSticker"),
  sticker,
  /** Sticker alternative text (emoji). */
  emoji: z.string().optional(),
  /** True, if premium animation must be played for the sticker. */
  is_premium: z.boolean().optional(),
});
export type MessageSticker = z.infer<typeof messageSticker>;