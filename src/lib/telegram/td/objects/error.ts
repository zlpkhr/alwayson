import * as z from "zod/v4";

export const error = z.object({
  "@type": z.literal("error"),
  code: z.int(),
  message: z.string(),
});

export type Error = z.infer<typeof error>;
