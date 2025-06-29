import * as z from "zod/v4";

export const replyMarkupRemoveKeyboard = z.object({
  "@type": z.literal("replyMarkupRemoveKeyboard"),
  is_personal: z.boolean(),
});

export type ReplyMarkupRemoveKeyboard = z.infer<
  typeof replyMarkupRemoveKeyboard
>;
