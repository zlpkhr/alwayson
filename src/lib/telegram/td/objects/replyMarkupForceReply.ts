import * as z from "zod/v4";

export const replyMarkupForceReply = z.object({
  "@type": z.literal("replyMarkupForceReply"),
  is_personal: z.boolean(),
  input_field_placeholder: z.string(),
});

export type ReplyMarkupForceReply = z.infer<typeof replyMarkupForceReply>;
