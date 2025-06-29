import * as z from "zod/v4";
import { textEntityTypeBankCardNumber } from "./textEntityTypeBankCardNumber";
import { textEntityTypeBlockQuote } from "./textEntityTypeBlockQuote";
import { textEntityTypeBold } from "./textEntityTypeBold";
import { textEntityTypeBotCommand } from "./textEntityTypeBotCommand";
import { textEntityTypeCashtag } from "./textEntityTypeCashtag";
import { textEntityTypeCode } from "./textEntityTypeCode";
import { textEntityTypeCustomEmoji } from "./textEntityTypeCustomEmoji";
import { textEntityTypeEmailAddress } from "./textEntityTypeEmailAddress";
import { textEntityTypeExpandableBlockQuote } from "./textEntityTypeExpandableBlockQuote";
import { textEntityTypeHashtag } from "./textEntityTypeHashtag";
import { textEntityTypeItalic } from "./textEntityTypeItalic";
import { textEntityTypeMediaTimestamp } from "./textEntityTypeMediaTimestamp";
import { textEntityTypeMention } from "./textEntityTypeMention";
import { textEntityTypeMentionName } from "./textEntityTypeMentionName";
import { textEntityTypePhoneNumber } from "./textEntityTypePhoneNumber";
import { textEntityTypePre } from "./textEntityTypePre";
import { textEntityTypePreCode } from "./textEntityTypePreCode";
import { textEntityTypeSpoiler } from "./textEntityTypeSpoiler";
import { textEntityTypeStrikethrough } from "./textEntityTypeStrikethrough";
import { textEntityTypeTextUrl } from "./textEntityTypeTextUrl";
import { textEntityTypeUnderline } from "./textEntityTypeUnderline";
import { textEntityTypeUrl } from "./textEntityTypeUrl";

export const textEntityType = z.discriminatedUnion("@type", [
  textEntityTypeBankCardNumber,
  textEntityTypeBlockQuote,
  textEntityTypeBold,
  textEntityTypeBotCommand,
  textEntityTypeCashtag,
  textEntityTypeCode,
  textEntityTypeCustomEmoji,
  textEntityTypeEmailAddress,
  textEntityTypeExpandableBlockQuote,
  textEntityTypeHashtag,
  textEntityTypeItalic,
  textEntityTypeMediaTimestamp,
  textEntityTypeMention,
  textEntityTypeMentionName,
  textEntityTypePhoneNumber,
  textEntityTypePre,
  textEntityTypePreCode,
  textEntityTypeSpoiler,
  textEntityTypeStrikethrough,
  textEntityTypeTextUrl,
  textEntityTypeUnderline,
  textEntityTypeUrl,
]);

export type TextEntityType = z.infer<typeof textEntityType>;
