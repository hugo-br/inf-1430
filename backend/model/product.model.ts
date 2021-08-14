import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { AdminDocument } from "./admin.model";

export interface ProductDocument extends mongoose.Document {
  name: String;
  description: String;
  quantity: Number;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
  price: Number;
}

// creation de la table dans la base de donnnee
const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(6),
    },
    name: { type: String },
    description: { type: String },
    quantity: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    startDate: { type: Date },
    endDate: { type: Date },
    price: { type: Number },
    lastUser: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);
export default Product;