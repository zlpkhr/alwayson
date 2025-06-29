import * as z from "zod/v4";
import { messageSendingStateFailed } from "./messageSendingStateFailed";
import { messageSendingStatePending } from "./messageSendingStatePending";

export const messageSendingState = z.discriminatedUnion("@type", [
  messageSendingStatePending,
  messageSendingStateFailed,
]);

export type MessageSendingState = z.infer<typeof messageSendingState>;
