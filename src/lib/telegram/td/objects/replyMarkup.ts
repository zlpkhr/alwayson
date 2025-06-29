import * as z from "zod/v4";
import { replyMarkupForceReply } from "./replyMarkupForceReply";
import { replyMarkupInlineKeyboard } from "./replyMarkupInlineKeyboard";
import { replyMarkupRemoveKeyboard } from "./replyMarkupRemoveKeyboard";
import { replyMarkupShowKeyboard } from "./replyMarkupShowKeyboard";

export const replyMarkup = z.discriminatedUnion("@type", [
  replyMarkupForceReply,
  replyMarkupInlineKeyboard,
  replyMarkupRemoveKeyboard,
  replyMarkupShowKeyboard,
]);

export type ReplyMarkup = z.infer<typeof replyMarkup>;
