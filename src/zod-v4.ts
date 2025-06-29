import * as z from "zod";

export const int = () => z.number().int();
// attach helper to namespace for convenience
// @ts-ignore
(z as any).int = int;

export * from "zod";
export default z;