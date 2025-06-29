import * as z from "zod/v4";

export const chatsSchema = z
  .object({
    chat_ids: z.array(z.number()),
    total_count: z.number(),
  })
  .pipe(
    z.transform((value) => ({
      chatIDs: value.chat_ids,
      totalCount: value.total_count,
    })),
  );

export const chatSchema = z.object({
  id: z.number(),
  title: z.string(),
});
