import * as z from "zod/v4";

export const messageSelfDestructTypeImmediately = z.object({
  "@type": z.literal("messageSelfDestructTypeImmediately"),
});

export type MessageSelfDestructTypeImmediately = z.infer<
  typeof messageSelfDestructTypeImmediately
>;
