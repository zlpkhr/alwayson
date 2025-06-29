import * as z from "zod/v4";
import { factCheck } from "./factCheck";
import { messageForwardInfo } from "./messageForwardInfo";
import { messageImportInfo } from "./messageImportInfo";
import { messageInteractionInfo } from "./messageInteractionInfo";
import { messageSchedulingState } from "./messageSchedulingState";
import { messageSender } from "./messageSender";
import { messageSendingState } from "./messageSendingState";
import { unreadReaction } from "./unreadReaction";

export const message = z.object({
  "@type": z.literal("message"),
  id: z.int(),
  sender_id: messageSender,
  chat_id: z.int(),
  sending_state: messageSendingState.optional(),
  scheduling_state: messageSchedulingState.optional(),
  is_outgoing: z.boolean(),
  is_pinned: z.boolean(),
  is_from_offline: z.boolean(),
  can_be_saved: z.boolean(),
  has_timestamped_media: z.boolean(),
  is_channel_post: z.boolean(),
  is_topic_message: z.boolean(),
  contains_unread_mention: z.boolean(),
  date: z.int(),
  edit_date: z.int(),
  forward_info: messageForwardInfo.optional(),
  import_info: messageImportInfo.optional(),
  interaction_info: messageInteractionInfo.optional(),
  unread_reactions: z.array(unreadReaction),
  fact_check: factCheck.optional(),
});

export type Message = z.infer<typeof message>;
