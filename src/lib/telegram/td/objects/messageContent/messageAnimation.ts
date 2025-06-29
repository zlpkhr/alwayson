/**
 * TDLib "messageAnimation" – an animation (GIF / MPEG-4) message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_animation.html
 */
import { z } from "zod/v4";
import { formattedText } from "../formattedText";

export const animation = z.object({
  "@type": z.literal("animation"),
  duration: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  file_name: z.string().optional(),
  mime_type: z.string().optional(),
  has_stickers: z.boolean().optional(),
  is_looped: z.boolean().optional(),
  animation: z.unknown().optional(),
});
export type Animation = z.infer<typeof animation>;

export const messageAnimation = z.object({
  "@type": z.literal("messageAnimation"),
  animation,
  caption: formattedText,
  show_caption_above_media: z.boolean().optional(),
  is_looped: z.boolean().optional(),
});
export type MessageAnimation = z.infer<typeof messageAnimation>;