import * as z from "zod/v4";

export const messageOriginChannel = z.object({
  "@type": z.literal("messageOriginChannel"),
  chat_id: z.int(),
  message_id: z.int(),
  author_signature: z.string(),
});

export type MessageOriginChannel = z.infer<typeof messageOriginChannel>;
