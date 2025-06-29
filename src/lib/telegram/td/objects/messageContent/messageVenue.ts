/**
 * TDLib "messageVenue" – a venue (location + venue) message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_venue.html
 */
import { z } from "zod/v4";

export const venue = z.object({
  "@type": z.literal("venue"),
  latitude: z.number(),
  longitude: z.number(),
  title: z.string(),
  address: z.string(),
  provider: z.string().optional(),
  id: z.string().optional(),
  type: z.string().optional(),
});
export type Venue = z.infer<typeof venue>;

export const messageVenue = z.object({
  "@type": z.literal("messageVenue"),
  venue,
});
export type MessageVenue = z.infer<typeof messageVenue>;