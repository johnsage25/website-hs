import type { NextApiRequest, NextApiResponse } from "next";
import _ from "lodash";
import { DomainExtensions, Packages, Products } from "../database";

export const getPackages = async (
  req?: NextApiRequest,
  res?: NextApiResponse
) => {
  return new Promise((resolve, reject) => {


    DomainExtensions.find({ productRegion: 'Germany' })
      .then((result: any) => {
        resolve({ products: JSON.parse(JSON.stringify(result))});
      })
      .catch((err: any) => {
        reject(err);
      });


  });

};
