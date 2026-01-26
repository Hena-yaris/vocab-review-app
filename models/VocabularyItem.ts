import mongoose, { Schema, Document, models, model } from "mongoose";

export interface VocabularyItemDocument extends Document {
  userId: mongoose.Types.ObjectId;
  term: string;
  type: string;
  meaning: string;
  example?: string;
  source?: string;
  tags?: string[];
  createdAt: Date;
}

const VocabularyItemSchema = new Schema<VocabularyItemDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    term: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
    },

    meaning: {
      type: String,
      required: true,
    },

    example: {
      type: String,
    },

    source: {
      type: String,
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

export const VocabularyItem =
  models.VocabularyItem ||
  model<VocabularyItemDocument>("VocabularyItem", VocabularyItemSchema);
