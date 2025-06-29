import * as z from "zod/v4";
import { formattedText } from "./formattedText";

export const textQuote = z.object({
  "@type": z.literal("textQuote"),
  text: formattedText,
  position: z.int(),
  is_manual: z.boolean(),
});

export type TextQuote = z.infer<typeof textQuote>;
