import mongoose, {Types} from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("abcd1234567890", 6);

export interface ProductDocument extends mongoose.Document {
  productId: String;
  name: String;
  description: String;
  quantity: Number;
  categories: Array<Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
  price: Number;
  lastUser: Types.ObjectId;
  images: Array<String>;
}

// creation de la table dans la base de donnnee
const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(),
    },
    name: { type: String, required: true },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0, default: 0 },
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
    createdAt: { type: Date },
    updatedAt: { type: Date },
    startDate: { type: Date },
    endDate: { type: Date },
    price: { type: Number, min: 0, default: 0 },
    lastUser: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    images: [{type: String}]
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);
export default Product;
