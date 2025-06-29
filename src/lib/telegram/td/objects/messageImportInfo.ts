import * as z from "zod/v4";

export const messageImportInfo = z.object({
  "@type": z.literal("messageImportInfo"),
  sender_name: z.string(),
  date: z.int(),
});

export type MessageImportInfo = z.infer<typeof messageImportInfo>;
