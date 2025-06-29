import * as z from "zod/v4";
import { messageSelfDestructTypeImmediately } from "./messageSelfDestructTypeImmediately";
import { messageSelfDestructTypeTimer } from "./messageSelfDestructTypeTimer";

export const messageSelfDestructType = z.discriminatedUnion("type", [
  messageSelfDestructTypeImmediately,
  messageSelfDestructTypeTimer,
]);

export type MessageSelfDestructType = z.infer<typeof messageSelfDestructType>;
