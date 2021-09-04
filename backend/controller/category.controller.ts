import { Request, Response } from "express";
import { get } from "lodash";
import {
  createCategory,
  findCategory,
  findAndUpdateCategory,
  deleteCategory,
} from "@service/category.service";

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

// retourner
export async function getCategoryHandler(req: Request, res: Response) {
  const categoryId = get(req, "params.categoryId");
  const category = await findCategory({ categoryId });
  if (!category) {
    return res.sendStatus(404).send("aucune categorie");
  }
  return res.send(category);
}

// supprimer
export async function deleteCategoryHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const categoryId = get(req, "params.categoryId");

  const category = await findCategory({ categoryId });

  if (!category) {
    return res.sendStatus(404);
  }

  await deleteCategory({ categoryId });
  return res.sendStatus(200);
}
