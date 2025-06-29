import * as z from "zod/v4";
import { reactionTypeCustomEmoji } from "./reactionTypeCustomEmoji";
import { reactionTypeEmoji } from "./reactionTypeEmoji";
import { reactionTypePaid } from "./reactionTypePaid";

export const reactionType = z.discriminatedUnion("@type", [
  reactionTypeCustomEmoji,
  reactionTypeEmoji,
  reactionTypePaid,
]);

export type ReactionType = z.infer<typeof reactionType>;
