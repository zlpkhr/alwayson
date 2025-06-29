import * as z from "zod/v4";
import { textEntityType } from "./textEntityType";

export const textEntity = z.object({
  "@type": z.literal("textEntity"),
  offset: z.number().int(),
  length: z.number().int(),
  type: textEntityType,
});

export type TextEntity = z.infer<typeof textEntity>;
