import * as z from "zod/v4";

export const replyMarkupInlineKeyboard = z.object({
  "@type": z.literal("replyMarkupInlineKeyboard"),
  rows: z.array(z.array(z.unknown())),
});

export type ReplyMarkupInlineKeyboard = z.infer<
  typeof replyMarkupInlineKeyboard
>;
