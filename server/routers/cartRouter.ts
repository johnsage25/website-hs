import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { procedure, router } from "../trpc";
import _ from "lodash";
import { Cart, mongoose } from "../../database";
import { CartInterface } from "../../types/CartInterface";
import { serialize } from "cookie";

export const t = initTRPC.create();

export const cartRouter = t.router({
  create: procedure
    // using zod schema to validate and infer input values
    .input(z.custom<CartInterface>())
    .mutation(({ ctx, input }: { ctx: any; input: CartInterface }) => {
      let sessionId = ctx?.req?.cookies["cart"] || null;

      return new Promise((resolve, reject) => {
        /// update of exist

        if (_.isEqual(Cart.exists({ _id: sessionId }), true)) {
          //
          Cart.updateOne(
            {
              _id: mongoose.Types.ObjectId(sessionId),
            },
            {
              $push: {
                product: input?._id,
                selectedPackage: {
                  productId: input?._id,
                  period: input?.period,
                },
              },
            }
          )
            .then((result: any) => {
              resolve(result);
            })
            .catch((err: any) => {
              reject(err);
            });

          //
        } else {
          //
          Cart.create({
            _id: mongoose.Types.ObjectId(),
            product: input._id,
            selectedPackage: [
              {
                productId: input._id,
                period: input?.period,
                domain: "",
              },
            ],
          })
            .then((result: any) => {
              ctx?.res.setHeader(
                "Set-Cookie",
                serialize("cart", result._id, {
                  path: "/",
                  maxAge: 1000 * 60 * 60 * 24 * 30,
                  httpOnly: true,
                })
              );

              resolve(result);
            })
            .catch((err: any) => {
              reject(err);
            });

          //
        }

        /// end of cart
      });
    }),

  domainCart: procedure
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }: { ctx: any; input: any }) => {
      let sessionId = ctx?.req?.cookies["cart"] || null;

      return new Promise((resolve, reject) => {
        Cart.findOne({ _id: sessionId })
          .populate(["tldExt"])
          .then((result: any) => {
            console.log(result);

            resolve(result);
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    }),

  checkAuth: procedure

    .input(
      z.object({
        pageName: z.string().nullable(),
      })
    )
    .mutation(async ({ ctx, input }: { ctx: any; input: any }) => {
      let sessionId = ctx?.req?.cookies["cart"] || null;

      let cart = await new Promise((resolve, reject) => {
        Cart.findById(sessionId)
          .then((result: any) => {
            resolve(result);
          })
          .catch((err: any) => {
            reject(err);
          });
      });

      return {
        isAuth: !_.isEmpty(ctx.session) ? true : false,
      };
    }),

  deleteTldOrder: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }: { ctx: any; input: any }) => {
      let sessionId = ctx?.req?.cookies["cart"] || null;

      console.log(input);

      return new Promise(async (resolve, reject) => {
        const parent = await Cart.findById(sessionId);

        Cart.updateOne(
          { _id: sessionId },
          {
            $pull: {
              domainSelected: { _id: mongoose.Types.ObjectId(input.id) },
            },
          }
        )
          .then((result: any) => {
            resolve(result);
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    }),

  updateTerm: procedure
    .input(
      z.object({
        term: z.number().nullable(),
        id: z.string().nullable(),
      })
    )
    .mutation(({ ctx, input }: { ctx: any; input: any }) => {
      let sessionId = ctx?.req?.cookies["cart"] || null;

      return new Promise((resolve, reject) => {
        Cart.updateOne(
          {
            _id: mongoose.Types.ObjectId(sessionId),
            "domainSelected._id": mongoose.Types.ObjectId(input?.id),
          },
          { $set: { "domainSelected.$.term": input?.term } }
        )
          .then((result: any) => {
            resolve(result);
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    }),
});
