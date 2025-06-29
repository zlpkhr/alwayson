import * as z from "zod/v4";

export const messageOriginUser = z.object({
  "@type": z.literal("messageOriginUser"),
  sender_user_id: z.int(),
});

export type MessageOriginUser = z.infer<typeof messageOriginUser>;
