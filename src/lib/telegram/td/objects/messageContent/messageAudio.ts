/**
 * TDLib "messageAudio" – an audio message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_audio.html
 */
import { z } from "zod/v4";
import { formattedText } from "../formattedText";

export const audio = z.object({
  "@type": z.literal("audio"),
  duration: z.number().int(),
  title: z.string().optional(),
  performer: z.string().optional(),
  file_name: z.string().optional(),
  mime_type: z.string().optional(),
  // Thumbnails and file omitted for brevity
  audio: z.unknown().optional(),
});
export type Audio = z.infer<typeof audio>;

export const messageAudio = z.object({
  "@type": z.literal("messageAudio"),
  audio,
  caption: formattedText,
});
export type MessageAudio = z.infer<typeof messageAudio>;