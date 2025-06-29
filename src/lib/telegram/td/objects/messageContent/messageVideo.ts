/**
 * TDLib "messageVideo" – a video message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video.html
 */
import { z } from "zod/v4";
import { formattedText } from "../formattedText";

// Minimal video object representation.
export const video = z.object({
  "@type": z.literal("video"),
  duration: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  file_name: z.string().optional(),
  mime_type: z.string().optional(),
  has_stickers: z.boolean().optional(),
  supports_streaming: z.boolean().optional(),
  // Actual file container placeholder
  video: z.unknown().optional(),
});
export type Video = z.infer<typeof video>;

export const messageVideo = z.object({
  "@type": z.literal("messageVideo"),
  video,
  caption: formattedText,
  show_caption_above_media: z.boolean().optional(),
  has_spoiler: z.boolean().optional(),
  is_looped: z.boolean().optional(),
  is_secret: z.boolean().optional(),
});
export type MessageVideo = z.infer<typeof messageVideo>;