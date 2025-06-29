import * as z from "zod/v4";
import { formattedText } from "./formattedText";

// https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_text.html
export const messageText = z.object({
  "@type": z.literal("messageText"),
  text: formattedText,
  // These two fields reference complex objects that are not yet represented in
  // the codebase. In order to keep the schema usable without blocking on their
  // implementation we accept any value and mark them as optional.
  link_preview: z.unknown().optional(),
  link_preview_options: z.unknown().optional(),
});

// https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_unsupported.html
export const messageUnsupported = z.object({
  "@type": z.literal("messageUnsupported"),
});

export const messageContent = z.discriminatedUnion("@type", [
  messageText,
  messageUnsupported,
]);

export type MessageText = z.infer<typeof messageText>;
export type MessageUnsupported = z.infer<typeof messageUnsupported>;
export type MessageContent = z.infer<typeof messageContent>;