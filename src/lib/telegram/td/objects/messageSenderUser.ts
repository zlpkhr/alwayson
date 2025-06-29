import * as z from "zod/v4";

export const messageSenderUser = z.object({
  "@type": z.literal("messageSenderUser"),
  user_id: z.int(),
});

export type MessageSenderUser = z.infer<typeof messageSenderUser>;
