/*
Owner ObjectId users
videoFile String
thumbnail string 
title string
description string
duration number 
views number 
isPublished boolean
createdAt Date
UpdatedAt Date
*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: string, //cloudinary URL
      required: true,
    },
    thumbanail: {
      type: string, //cloudiary url
      required: true,
    },
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
