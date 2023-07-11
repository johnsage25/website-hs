import type { NextApiRequest, NextApiResponse } from "next";
import _ from "lodash";
import {
  DomainExtensions,
  FeaturedDomainTld,
  Packages,
  Products,
} from "../database";

export const featuredTldTable = async (
  req?: NextApiRequest,
  res?: NextApiResponse
) => {
  return new Promise((resolve, reject) => {
    FeaturedDomainTld.find().populate("tld")
      .then((result: any) => {
        resolve({ tldlist: JSON.parse(JSON.stringify(result)) });
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
