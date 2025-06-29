import * as z from "zod/v4";

export const messageSendingStatePending = z.object({
  "@type": z.literal("messageSendingStatePending"),
  sending_id: z.int(),
});

export type MessageSendingStatePending = z.infer<
  typeof messageSendingStatePending
>;
