import * as z from "zod/v4";

export const textEntityTypeEmailAddress = z.object({
  "@type": z.literal("textEntityTypeEmailAddress"),
});

export type TextEntityTypeEmailAddress = z.infer<
  typeof textEntityTypeEmailAddress
>;
