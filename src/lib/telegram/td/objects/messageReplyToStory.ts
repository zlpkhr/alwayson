import * as z from "zod/v4";

export const messageReplyToStory = z.object({
  "@type": z.literal("messageReplyToStory"),
  story_poster_chat_id: z.int(),
  story_id: z.int(),
});

export type MessageReplyToStory = z.infer<typeof messageReplyToStory>;
