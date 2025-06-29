import * as z from "zod/v4";
import { messageSchedulingStateSendAtDate } from "./messageSchedulingStateSendAtDate";
import { messageSchedulingStateSendWhenOnline } from "./messageSchedulingStateSendWhenOnline";
import { messageSchedulingStateSendWhenVideoProcessed } from "./messageSchedulingStateSendWhenVideoProcessed";

export const messageSchedulingState = z.discriminatedUnion("@type", [
  messageSchedulingStateSendAtDate,
  messageSchedulingStateSendWhenOnline,
  messageSchedulingStateSendWhenVideoProcessed,
]);

export type MessageSchedulingState = z.infer<typeof messageSchedulingState>;
