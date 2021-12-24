import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Product, { ProductDocument } from "../model/product.model";
import Category, { CategoryDocument } from "@model/category.model";

export async function createProduct(
  input: DocumentDefinition<ProductDocument>
) {
  const newProduct = await Product.create(input);
  await Category.updateMany(
    { _id: newProduct.categories },
    { $push: { products: newProduct._id } }
  );
  return newProduct;
}

export function findAllProducts() {
  const filter = {};
  const options = { lean: true };
  return Product.find(filter, {}, options);
}

export function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return Product.findOne(query, {}, options);
}

export function findProducts(query: FilterQuery<ProductDocument>) {
  return Product.find(query.filter)
    .select(query.select)
    .sort(query.sort)
    .limit(query.limit)
    .exec();
}

export async function findAndUpdate(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  const oldProduct = await Product.findOne(query, {}, options);
  await Category.updateMany(
    { _id: oldProduct.categories },
    { $pull: { products: oldProduct._id } }
  );

  const product = await Product.findOneAndUpdate(query, update, options);
  await Category.updateMany(
    { _id: product.categories },
    { $push: { products: product._id } }
  );
  return product;
}

export function deleteProduct(query: FilterQuery<ProductDocument>) {
  return Product.deleteOne(query);
}

// update Products when category is removed
export async function updateProductAfterCategoryDeleted(
  category: CategoryDocument
) {
  await Product.updateMany(
    { _id: category.products },
    { $pull: { categories: category._id } }
  );
}
