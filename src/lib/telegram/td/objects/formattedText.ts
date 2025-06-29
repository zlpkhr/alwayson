import * as z from "zod/v4";
import { textEntity } from "./textEntity";

export const formattedText = z.object({
  "@type": z.literal("formattedText"),
  text: z.string(),
  entities: z.array(textEntity),
});

export type FormattedText = z.infer<typeof formattedText>;
