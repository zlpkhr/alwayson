import * as z from "zod/v4";
import { messageReaction } from "./messageReaction";
import { messageReplyInfo } from "./messageReplyInfo";

export const messageInteractionInfo = z.object({
  "@type": z.literal("messageInteractionInfo"),
  view_count: z.int(),
  forward_count: z.int(),
  reply_info: messageReplyInfo.optional(),
  reactions: messageReaction.optional(),
});

export type MessageInteractionInfo = z.infer<typeof messageInteractionInfo>;
