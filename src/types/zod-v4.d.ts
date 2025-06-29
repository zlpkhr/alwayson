declare module "zod/v4" {
  import * as base from "zod";
  const extended: typeof base.z & typeof base & {
    /** Shortcut for z.number().int() */
    int: () => ReturnType<typeof base.z.number>;
  };
  export = extended;
}