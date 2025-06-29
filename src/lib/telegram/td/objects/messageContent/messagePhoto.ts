/**
 * TDLib "messagePhoto" object – a photo message.
 * See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_photo.html
 */
import { z } from "zod/v4";
import { formattedText } from "../formattedText";

// Minimal "photo" object. TDLib exposes a list of sizes and a flag.
export const photo = z.object({
  "@type": z.literal("photo"),
  /** Available size variants (use unknown for now). */
  sizes: z.array(z.unknown()),
  /** True, if stickers were added to the photo. */
  has_stickers: z.boolean().optional(),
});
export type Photo = z.infer<typeof photo>;

export const messagePhoto = z.object({
  "@type": z.literal("messagePhoto"),
  /** The photo itself. */
  photo: photo,
  /** Caption formatted text. */
  caption: formattedText,
  /** Whether the caption must be shown above the media. */
  show_caption_above_media: z.boolean().optional(),
  /** Cover preview with spoiler animation. */
  has_spoiler: z.boolean().optional(),
  /** Secret media flag (blur until tapped). */
  is_secret: z.boolean().optional(),
});
export type MessagePhoto = z.infer<typeof messagePhoto>;