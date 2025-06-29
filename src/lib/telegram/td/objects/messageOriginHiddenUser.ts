import * as z from "zod/v4";

export const messageOriginHiddenUser = z.object({
  "@type": z.literal("messageOriginHiddenUser"),
  sender_name: z.string(),
});

export type MessageOriginHiddenUser = z.infer<typeof messageOriginHiddenUser>;
