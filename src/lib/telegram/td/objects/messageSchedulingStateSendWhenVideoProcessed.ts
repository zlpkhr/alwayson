import * as z from "zod/v4";

export const messageSchedulingStateSendWhenVideoProcessed = z.object({
  "@type": z.literal("messageSchedulingStateSendWhenVideoProcessed"),
});

export type MessageSchedulingStateSendWhenVideoProcessed = z.infer<
  typeof messageSchedulingStateSendWhenVideoProcessed
>;
