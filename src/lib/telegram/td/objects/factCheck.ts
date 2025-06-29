import * as z from "zod/v4";
import { formattedText } from "./formattedText";

export const factCheck = z.object({
  "@type": z.literal("factCheck"),
  text: formattedText,
  country_code: z.string(),
});

export type FactCheck = z.infer<typeof factCheck>;
