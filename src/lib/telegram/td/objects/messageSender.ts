import * as z from "zod/v4";
import { messageSenderChat } from "./messageSenderChat";
import { messageSenderUser } from "./messageSenderUser";

export const messageSender = z.discriminatedUnion("@type", [
  messageSenderUser,
  messageSenderChat,
]);

export type MessageSender = z.infer<typeof messageSender>;
