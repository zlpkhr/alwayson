import * as z from "zod/v4";

export const messageSelfDestructTypeTimer = z.object({
  "@type": z.literal("messageSelfDestructTypeTimer"),
  self_destruct_time: z.int(),
});

export type MessageSelfDestructTypeTimer = z.infer<
  typeof messageSelfDestructTypeTimer
>;
