import * as z from "zod/v4";

export const replyMarkupShowKeyboard = z.object({
  "@type": z.literal("replyMarkupShowKeyboard"),
  rows: z.array(z.array(z.unknown())),
  is_persistent: z.boolean(),
  resize_keyboard: z.boolean(),
  one_time: z.boolean(),
  is_personal: z.boolean(),
  input_field_placeholder: z.string(),
});

export type ReplyMarkupShowKeyboard = z.infer<typeof replyMarkupShowKeyboard>;
