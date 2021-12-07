import mongoose, { Types } from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("wxyz1234567890", 6);

export interface CategoryDocument extends mongoose.Document {
  categoryId: String;
  name: String;
  description: String;
  products: Array<Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
  lastUser: Types.ObjectId;
  isPublished: Boolean;
  images: Array<String>;
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
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    createdAt: { type: Date },
    updatedAt: { type: Date },
    startDate: { type: Date },
    endDate: { type: Date },
    lastUser: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    isPublished: { type: Boolean, default: false },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const Category = mongoose.model<CategoryDocument>("Category", CategorySchema);
export default Category;
