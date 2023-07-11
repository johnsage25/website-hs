import { Customers, Packages, Products, ServerRegions } from "../database";

export const RegionList = async () => {
  return await new Promise((resolve, reject) => {
    ServerRegions.find()
      .sort({ createdAt: -1 })
      .then((result: any) => {
        resolve(JSON.parse(JSON.stringify(result)));
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
