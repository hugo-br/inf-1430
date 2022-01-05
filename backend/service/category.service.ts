import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Category, { CategoryDocument } from "@model/category.model";
import { ProductDocument } from "../model/product.model";

export function createCategory(input: DocumentDefinition<CategoryDocument>) {
  return Category.create(input);
}

export function findCategory(
  query: FilterQuery<CategoryDocument>,
  options: QueryOptions = { lean: true }
) {
  return Category.findOne(query, {}, options);
}

/**
 * @desc    Returns all availables products in one particular category
 * @param   query  CategoryID
 * @return  Category informations to display the category products, must matched ProductService->getAllAvailableProducts()
 */
export function findCategoryAndProducts(
  query: FilterQuery<CategoryDocument>,
  options: QueryOptions = { lean: true }
) {
  return Category.findOne(query, {}, options)
    .populate({
      path: "products",
      select: [
        "_id",
        "productId",
        "name",
        "price",
        "quantity",
        "images",
        "createdAt",
      ],
      match: { isPublished: true },
    })
    .exec();
}

export function findAllCategories() {
  const filter = {};
  const options = { lean: true };
  return Category.find(filter, {}, options);
}

export function findAndUpdateCategory(
  query: FilterQuery<CategoryDocument>,
  update: UpdateQuery<CategoryDocument>,
  options: QueryOptions
) {
  return Category.findOneAndUpdate(query, update, options);
}

export function deleteCategory(query: FilterQuery<CategoryDocument>) {
  return Category.deleteOne(query);
}

// Update
export async function updateCategoryAfterProductDeleted(
  product: ProductDocument
) {
  await Category.updateMany(
    { _id: product.categories },
    { $pull: { products: product._id } }
  );
}
