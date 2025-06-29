import * as z from "zod/v4";

export const textEntityTypeBankCardNumber = z.object({
  "@type": z.literal("textEntityTypeBankCardNumber"),
});

export type TextEntityTypeBankCardNumber = z.infer<
  typeof textEntityTypeBankCardNumber
>;
