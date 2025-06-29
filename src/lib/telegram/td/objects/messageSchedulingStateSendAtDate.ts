import * as z from "zod/v4";

export const messageSchedulingStateSendAtDate = z.object({
  "@type": z.literal("messageSchedulingStateSendAtDate"),
  send_date: z.int(),
});

export type MessageSchedulingStateSendAtDate = z.infer<
  typeof messageSchedulingStateSendAtDate
>;
