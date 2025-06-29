import * as z from "zod/v4";
import { message } from "./message";

export const messages = z.object({
  "@type": z.literal("messages"),
  total_count: z.int(),
  messages: z.array(message),
});

export type Messages = z.infer<typeof messages>;
