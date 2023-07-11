import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { procedure, router } from "../trpc";
import _ from "lodash";
import { Cart, Virtualizations, VmCart, mongoose } from "../../database";
import { CartInterface } from "../../types/CartInterface";
import { serialize } from "cookie";
import { CreateNodeInterface } from "../../types/CreateNodeInterface";

export const t = initTRPC.create();

export const nodeRouter = t.router({
  landingQuery: procedure
    // using zod schema to validate and infer input values
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }: { ctx: any; input: any }) => {
      return new Promise((resolve, reject) => {
        Virtualizations.find()
          .populate(["pricing", "region"])
          .sort({ createdAt: -1 })
          .then((result: any) => {
            resolve(result);
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    }),
  createVmCart: procedure
    .input(z.custom<CreateNodeInterface>())
    .mutation(
      async ({ ctx, input }: { ctx: any; input: CreateNodeInterface }) => {
        let vm = await Virtualizations.findOne({ _id: input._id }).populate([
          "pricing",
        ]);

        return new Promise((resolve, reject) => {
          let id = ctx?.session?.customer[0]?._id;
          VmCart.create({
            _id: mongoose.Types.ObjectId(),
            customer: id,
            vm: vm._id,
            region: vm.region,
          })
            .then((result: any) => {

              if (_.isEmpty(ctx?.session?.customer)) {
                resolve({
                  status: "redirect",
                  message: "auth required",
                  id: result._id,
                });
              } else {
                resolve({
                  status: "continue",
                  message: "cart created",
                  id: result._id,
                });
              }
            })
            .catch((err: any) => {
              reject(err);
            });
        });
      }
    ),
});
