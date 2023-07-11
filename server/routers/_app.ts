import { z } from "zod";
import { procedure, router } from "../trpc";
import { cartRouter } from "./cartRouter";
import { searchRouter } from "./searchRouter";
import { nodeRouter } from "./nodeRouter";

export const appRouter = router({
  cart: cartRouter,
  search: searchRouter,
  node: nodeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
