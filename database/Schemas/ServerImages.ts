const mongoose = require("mongoose");

export const ServerImagesSchema = mongoose.Schema(
  {
    _id: mongoose.ObjectId,
    createdAt: {type : Date, default: Date.now},
    updatedAt: {type : Date, default: Date.now},
    imageName: String,
    osType: String,
    picture: Object,
    versions: Array,
    category: [
        {
          type: mongoose.ObjectId,
          ref: "ImageCategory",
        },
      ],
  },
  {
    timestamps: true,
  }
);
