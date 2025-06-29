import * as z from "zod/v4";

export const messageOriginChat = z.object({
  "@type": z.literal("messageOriginChat"),
  sender_chat_id: z.int(),
  author_signature: z.string(),
});

export type MessageOriginChat = z.infer<typeof messageOriginChat>;
