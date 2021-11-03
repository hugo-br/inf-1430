import { Request, Response } from "express";
import { get } from "lodash";
import {
  createCategory,
  findCategory,
  findAllCategories,
  findAndUpdateCategory,
  deleteCategory,
  findCategoryAndProducts
} from "@service/category.service";
import { updateProductAfterCategoryDeleted } from "../service/product.service";

// creer
export async function createCategoryHandler(req: Request, res: Response) {
  const adminId = get(req, "user._id");
  const body = req.body;
  const category = await createCategory({ ...body, lastUser: adminId });
  return res.send("Category ajoutee");
}

// modifier
export async function updateCategoryHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const categoryId = get(req, "params.categoryId");
  const update = req.body;
  const category = await findCategory({ categoryId });
  if (!category) return res.sendStatus(404);
  const updatedCategory = await findAndUpdateCategory({ categoryId }, update, {
    new: true,
  });
  return res.send(updatedCategory);
}

// retourner une category specifique
export async function getCategoryHandler(req: Request, res: Response) {
  const categoryId = get(req, "params.categoryId");
  const category = await findCategoryAndProducts( { categoryId: categoryId } );
  /*if (!category) {
    return res.sendStatus(404).send("aucune categorie");
  }*/
  return res.send(category);
}

// retourner toutes les categories
export async function getAllCategoriesHandler(req: Request, res: Response) {
  const categories = await findAllCategories();
  if (!categories) {
    return res.sendStatus(404).send("aucune categories");
  }
  return res.send(categories);
}


export async function deleteCategoryHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const categoryId = get(req, "params.categoryId");

  const category = await findCategory({ categoryId });

  if (!category) {
    return res.sendStatus(404);
  }

  // delete the category
  await deleteCategory({ categoryId });

  // update the products with that category
  await updateProductAfterCategoryDeleted(category);

  // send OK code
  return res.sendStatus(200);
}