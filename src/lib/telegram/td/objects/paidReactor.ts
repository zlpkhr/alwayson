import * as z from "zod/v4";
import { messageSender } from "./messageSender";

export const paidReactor = z.object({
  "@type": z.literal("paidReactor"),
  sender_id: messageSender.optional(),
  star_count: z.number().int(),
  is_top: z.boolean(),
  is_me: z.boolean(),
  is_anonymous: z.boolean(),
});

export type PaidReactor = z.infer<typeof paidReactor>;
