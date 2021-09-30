import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("wxyz1234567890", 6);

export interface CategoryDocument extends mongoose.Document {
  name: String;
  description: String;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
}

// creation de la table dans la base de donnnee
const CategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(),
    },
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    startDate: { type: Date },
    endDate: { type: Date },
    lastUser: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

const Category = mongoose.model<CategoryDocument>("Category", CategorySchema);
export default Category;
