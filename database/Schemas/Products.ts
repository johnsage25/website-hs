const mongoose = require("mongoose");

export const ProductsSchema = mongoose.Schema(
  {
    _id: mongoose.ObjectId,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    ShortDescription: String,
    accountType: String,
    affiliate: { type: Boolean, default: false },
    backupAmount: Number,
    backupEnabled: { type: Boolean, default: false },
    connectType: String,
    connectionOption: [
      {
        type: mongoose.ObjectId,
        ref: "ServerConnections",
      },
    ],
    category: [
      {
        type: mongoose.ObjectId,
        ref: "PackageCategories",
      },
    ],
    createAutomatically: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    freedomain: { type: Boolean, default: false },
    freessl: { type: Boolean, default: false },
    plan: String,
    stockLimit: Number,
    productFeatures: Array,
    productName: String,
    productType: String,
    productRegion: [{ type: mongoose.ObjectId, ref: "ServerRegions" }],
    serverBandwidth: String,
    serverCpu: String,
    serverDiskSpace: String,
    serverRaid: String,
    serverRam: String,
    serviceTransfer: { type: Boolean, default: false },
    tax: Boolean,
    upgradeablePackages: Array,
    status: { type: Boolean, default: true },
    package: [
      {
        type: mongoose.ObjectId,
        ref: "Packages",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);
