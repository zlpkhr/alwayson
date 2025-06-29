import { z } from "zod/v4";
import { formattedText } from "./formattedText";

// Rich-media message schemas implemented in dedicated files
import { messagePhoto } from "./messageContent/messagePhoto";
import { messageVideo } from "./messageContent/messageVideo";
import { messageAnimation } from "./messageContent/messageAnimation";
import { messageAudio } from "./messageContent/messageAudio";

// Additional concrete message content schemas
import { messageSticker } from "./messageContent/messageSticker";
import { messagePoll } from "./messageContent/messagePoll";
import { messageContact } from "./messageContent/messageContact";
import { messageVenue } from "./messageContent/messageVenue";

// https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_text.html
export const messageText = z.object({
  "@type": z.literal("messageText"),
  text: formattedText,
  // These two fields reference complex objects that are not yet represented in
  // the codebase. In order to keep the schema usable without blocking on their
  // implementation we accept any value and mark them as optional.
  link_preview: z.unknown().optional(),
  link_preview_options: z.unknown().optional(),
});

// https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_unsupported.html
export const messageUnsupported = z.object({
  "@type": z.literal("messageUnsupported"),
});

// Placeholder schemas for yet-to-be-implemented MessageContent sub-types.
// They are defined as passthrough objects so that unknown extra fields are preserved.
const makePlaceholder = (type: string) =>
  z.object({ "@type": z.literal(type) }).passthrough();

export const messageAnimatedEmoji = makePlaceholder("messageAnimatedEmoji");
export const messageBasicGroupChatCreate = makePlaceholder("messageBasicGroupChatCreate");
export const messageBotWriteAccessAllowed = makePlaceholder("messageBotWriteAccessAllowed");
export const messageCall = makePlaceholder("messageCall");
export const messageChatAddMembers = makePlaceholder("messageChatAddMembers");
export const messageChatBoost = makePlaceholder("messageChatBoost");
export const messageChatChangePhoto = makePlaceholder("messageChatChangePhoto");
export const messageChatChangeTitle = makePlaceholder("messageChatChangeTitle");
export const messageChatDeleteMember = makePlaceholder("messageChatDeleteMember");
export const messageChatDeletePhoto = makePlaceholder("messageChatDeletePhoto");
export const messageChatJoinByLink = makePlaceholder("messageChatJoinByLink");
export const messageChatJoinByRequest = makePlaceholder("messageChatJoinByRequest");
export const messageChatSetBackground = makePlaceholder("messageChatSetBackground");
export const messageChatSetMessageAutoDeleteTime = makePlaceholder("messageChatSetMessageAutoDeleteTime");
export const messageChatSetTheme = makePlaceholder("messageChatSetTheme");
export const messageChatShared = makePlaceholder("messageChatShared");
export const messageChatUpgradeFrom = makePlaceholder("messageChatUpgradeFrom");
export const messageChatUpgradeTo = makePlaceholder("messageChatUpgradeTo");
export const messageContactRegistered = makePlaceholder("messageContactRegistered");
export const messageCustomServiceAction = makePlaceholder("messageCustomServiceAction");
export const messageDice = makePlaceholder("messageDice");
export const messageDocument = makePlaceholder("messageDocument");
export const messageExpiredPhoto = makePlaceholder("messageExpiredPhoto");
export const messageExpiredVideo = makePlaceholder("messageExpiredVideo");
export const messageExpiredVideoNote = makePlaceholder("messageExpiredVideoNote");
export const messageExpiredVoiceNote = makePlaceholder("messageExpiredVoiceNote");
export const messageForumTopicCreated = makePlaceholder("messageForumTopicCreated");
export const messageForumTopicEdited = makePlaceholder("messageForumTopicEdited");
export const messageForumTopicIsClosedToggled = makePlaceholder("messageForumTopicIsClosedToggled");
export const messageForumTopicIsHiddenToggled = makePlaceholder("messageForumTopicIsHiddenToggled");
export const messageGame = makePlaceholder("messageGame");
export const messageGameScore = makePlaceholder("messageGameScore");
export const messageGift = makePlaceholder("messageGift");
export const messageGiftedPremium = makePlaceholder("messageGiftedPremium");
export const messageGiftedStars = makePlaceholder("messageGiftedStars");
export const messageGiveaway = makePlaceholder("messageGiveaway");
export const messageGiveawayCompleted = makePlaceholder("messageGiveawayCompleted");
export const messageGiveawayCreated = makePlaceholder("messageGiveawayCreated");
export const messageGiveawayPrizeStars = makePlaceholder("messageGiveawayPrizeStars");
export const messageGiveawayWinners = makePlaceholder("messageGiveawayWinners");
export const messageGroupCall = makePlaceholder("messageGroupCall");
export const messageInviteVideoChatParticipants = makePlaceholder("messageInviteVideoChatParticipants");
export const messageInvoice = makePlaceholder("messageInvoice");
export const messageLocation = makePlaceholder("messageLocation");
export const messagePaidMedia = makePlaceholder("messagePaidMedia");
export const messagePaidMessagePriceChanged = makePlaceholder("messagePaidMessagePriceChanged");
export const messagePaidMessagesRefunded = makePlaceholder("messagePaidMessagesRefunded");
export const messagePassportDataReceived = makePlaceholder("messagePassportDataReceived");
export const messagePassportDataSent = makePlaceholder("messagePassportDataSent");
export const messagePaymentRefunded = makePlaceholder("messagePaymentRefunded");
export const messagePaymentSuccessful = makePlaceholder("messagePaymentSuccessful");
export const messagePaymentSuccessfulBot = makePlaceholder("messagePaymentSuccessfulBot");
export const messagePinMessage = makePlaceholder("messagePinMessage");
export const messagePoll = makePlaceholder("messagePoll");
export const messagePremiumGiftCode = makePlaceholder("messagePremiumGiftCode");
export const messageProximityAlertTriggered = makePlaceholder("messageProximityAlertTriggered");
export const messageRefundedUpgradedGift = makePlaceholder("messageRefundedUpgradedGift");
export const messageScreenshotTaken = makePlaceholder("messageScreenshotTaken");
export const messageSticker = makePlaceholder("messageSticker");
export const messageStory = makePlaceholder("messageStory");
export const messageSuggestProfilePhoto = makePlaceholder("messageSuggestProfilePhoto");
export const messageSupergroupChatCreate = makePlaceholder("messageSupergroupChatCreate");
export const messageUpgradedGift = makePlaceholder("messageUpgradedGift");
export const messageUsersShared = makePlaceholder("messageUsersShared");
export const messageVenue = makePlaceholder("messageVenue");
export const messageVideoChatEnded = makePlaceholder("messageVideoChatEnded");
export const messageVideoChatScheduled = makePlaceholder("messageVideoChatScheduled");
export const messageVideoChatStarted = makePlaceholder("messageVideoChatStarted");
export const messageVideoNote = makePlaceholder("messageVideoNote");
export const messageVoiceNote = makePlaceholder("messageVoiceNote");
export const messageWebAppDataReceived = makePlaceholder("messageWebAppDataReceived");
export const messageWebAppDataSent = makePlaceholder("messageWebAppDataSent");

// Re-export helper type for all placeholder variants
export type PlaceholderMessageContent = z.infer<ReturnType<typeof makePlaceholder>>;

// Update the discriminated union to include all message content types
export const messageContent = z.discriminatedUnion("@type", [
  messageText,
  messageUnsupported,
  messageAnimatedEmoji,
  messageBasicGroupChatCreate,
  messageBotWriteAccessAllowed,
  messageCall,
  messageChatAddMembers,
  messageChatBoost,
  messageChatChangePhoto,
  messageChatChangeTitle,
  messageChatDeleteMember,
  messageChatDeletePhoto,
  messageChatJoinByLink,
  messageChatJoinByRequest,
  messageChatSetBackground,
  messageChatSetMessageAutoDeleteTime,
  messageChatSetTheme,
  messageChatShared,
  messageChatUpgradeFrom,
  messageChatUpgradeTo,
  messageContact,
  messageContactRegistered,
  messageCustomServiceAction,
  messageDice,
  messageDocument,
  messageExpiredPhoto,
  messageExpiredVideo,
  messageExpiredVideoNote,
  messageExpiredVoiceNote,
  messageForumTopicCreated,
  messageForumTopicEdited,
  messageForumTopicIsClosedToggled,
  messageForumTopicIsHiddenToggled,
  messageGame,
  messageGameScore,
  messageGift,
  messageGiftedPremium,
  messageGiftedStars,
  messageGiveaway,
  messageGiveawayCompleted,
  messageGiveawayCreated,
  messageGiveawayPrizeStars,
  messageGiveawayWinners,
  messageGroupCall,
  messageInviteVideoChatParticipants,
  messageInvoice,
  messageLocation,
  messagePaidMedia,
  messagePaidMessagePriceChanged,
  messagePaidMessagesRefunded,
  messagePassportDataReceived,
  messagePassportDataSent,
  messagePaymentRefunded,
  messagePaymentSuccessful,
  messagePaymentSuccessfulBot,
  messagePinMessage,
  messagePoll,
  messagePremiumGiftCode,
  messageProximityAlertTriggered,
  messageRefundedUpgradedGift,
  messageScreenshotTaken,
  messageSticker,
  messageStory,
  messageSuggestProfilePhoto,
  messageSupergroupChatCreate,
  messageUpgradedGift,
  messageUsersShared,
  messageVenue,
  messageVideoChatEnded,
  messageVideoChatScheduled,
  messageVideoChatStarted,
  messageVideoNote,
  messageVoiceNote,
  messageWebAppDataReceived,
  messageWebAppDataSent,
  // concrete rich-media types
  messagePhoto,
  messageVideo,
  messageAnimation,
  messageAudio,
  // concrete misc types
  messagePoll,
  messageContact,
  messageVideoChatEnded,
  messageVideoChatScheduled,
  messageVideoChatStarted,
  messageVideoNote,
  messageVoiceNote,
  messageWebAppDataSent,
]);

// Utility aggregate TypeScript type
export type MessageContent = z.infer<typeof messageContent>;

export type MessageText = z.infer<typeof messageText>;

export type MessageUnsupported = z.infer<typeof messageUnsupported>;

// ---------------------------------------------------------------------------
//  End of file
// ---------------------------------------------------------------------------
