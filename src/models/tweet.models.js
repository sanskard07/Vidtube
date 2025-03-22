import mongoose from "mongoose";

const tweetSchema = newSchema(
  {
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeatamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
