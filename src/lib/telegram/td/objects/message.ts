import * as z from "zod/v4";
import { factCheck } from "./factCheck";
import { messageForwardInfo } from "./messageForwardInfo";
import { messageImportInfo } from "./messageImportInfo";
import { messageInteractionInfo } from "./messageInteractionInfo";
import { messageReplyTo } from "./messageReplyTo";
import { messageSchedulingState } from "./messageSchedulingState";
import { messageSelfDestructType } from "./messageSelfDestructType";
import { messageSender } from "./messageSender";
import { messageSendingState } from "./messageSendingState";
import { replyMarkup } from "./replyMarkup";
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
  reply_to: messageReplyTo.optional(),
  message_thread_id: z.int(),
  saved_messages_topic_id: z.int(),
  self_destruct_type: messageSelfDestructType,
  self_destruct_in: z.number(),
  auto_delete_in: z.number(),
  via_bot_user_id: z.int(),
  sender_business_bot_user_id: z.int(),
  sender_boost_count: z.int(),
  paid_message_star_count: z.int(),
  author_signature: z.string(),
  media_album_id: z.bigint(),
  effect_id: z.bigint(),
  has_sensitive_content: z.boolean(),
  restriction_reason: z.string(),
  content: z.unknown(),
  reply_markup: replyMarkup.optional(),
});

export type Message = z.infer<typeof message>;
