const mongoose = require("mongoose");

export const FeaturedDomainTldSchema = mongoose.Schema(
  {
    _id: mongoose.ObjectId,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    description: String,
    logo: String,
    tld: [
      {
        type: mongoose.ObjectId,
        ref: "DomainExtensions",
      },
    ],
  },
  {
    timestamps: true,
  }
);
