import * as z from "zod/v4";

export const messageSenderChat = z.object({
  "@type": z.literal("messageSenderChat"),
  chat_id: z.int(),
});

export type MessageSenderChat = z.infer<typeof messageSenderChat>;
