declare module "zod/v4" {
  export * from "zod";
  import * as z from "zod";
  // Helper added in shim
  export function int(): z.ZodNumber;
  export default z;
}