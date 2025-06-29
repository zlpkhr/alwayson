import * as z from "zod/v4";
import { forwardSource } from "./forwardSource";
import { messageOrigin } from "./messageOrigin";

export const messageForwardInfo = z.object({
  "@type": z.literal("messageForwardInfo"),
  origin: messageOrigin,
  date: z.int(),
  source: forwardSource.optional(),
  public_service_announcement_type: z.string(),
});

export type MessageForwardInfo = z.infer<typeof messageForwardInfo>;
