import mongoose, { Schema, Document, models, model } from "mongoose";

export interface ReviewStateDocument extends Document {
  userId: mongoose.Types.ObjectId;
  vocabItemId: mongoose.Types.ObjectId;
  intervalDays: number;
  nextReviewDate: Date;
  lastReviewedAt?: Date;
  reviewCount: number;
}

const ReviewStateSchema = new Schema<ReviewStateDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    vocabItemId: {
      type: Schema.Types.ObjectId,
      ref: "VocabularyItem",
      required: true,
      unique: true,
    },

    intervalDays: {
      type: Number,
      required: true,
      default: 1,
    },

    nextReviewDate: {
      type: Date,
      required: true,
      index: true,
    },

    lastReviewedAt: {
      type: Date,
    },

    reviewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: false,
  },
);

export const ReviewState =
  models.ReviewState ||
  model<ReviewStateDocument>("ReviewState", ReviewStateSchema);
