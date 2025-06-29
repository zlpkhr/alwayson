import * as z from "zod/v4";

export const messageSchedulingStateSendWhenOnline = z.object({
  "@type": z.literal("messageSchedulingStateSendWhenOnline"),
});

export type MessageSchedulingStateSendWhenOnline = z.infer<
  typeof messageSchedulingStateSendWhenOnline
>;
