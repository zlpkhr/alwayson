/**
 * TDLib "messageContact" – a contact card message.
 * https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_contact.html
 */
import { z } from "zod/v4";

export const contact = z.object({
  "@type": z.literal("contact"),
  phone_number: z.string(),
  first_name: z.string(),
  last_name: z.string().optional(),
  vcard: z.string().optional(),
  user_id: z.number().int().optional(),
});
export type Contact = z.infer<typeof contact>;

export const messageContact = z.object({
  "@type": z.literal("messageContact"),
  contact,
});
export type MessageContact = z.infer<typeof messageContact>;