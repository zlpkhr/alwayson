import * as z from "zod/v4";

export const textEntityTypePhoneNumber = z.object({
  "@type": z.literal("textEntityTypePhoneNumber"),
});

export type TextEntityTypePhoneNumber = z.infer<
  typeof textEntityTypePhoneNumber
>;
