import { Request, Response } from "express";
import { get } from "lodash";
import {
  createProduct,
  findProduct,
  findAndUpdate,
  deleteProduct,
} from "../service/product.service";

// creer
export async function createProductHandler(req: Request, res: Response) {
  const adminId = get(req, "user._id");
  const body = req.body;
  const product = await createProduct({ ...body, lastUser: adminId });
  return res.send("Produit ajouter");
}

// modifier
export async function updateProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");
  const update = req.body;
  const product = await findProduct({ productId });
  if (!product) return res.sendStatus(404);
  // if (String(product.user) !== userId) {
  //   return res.sendStatus(401);
  // }
  const updatedProduct = await findAndUpdate({ productId }, update, {
    new: true,
  });
  return res.send(updatedProduct);
}

// retourner
export async function getProductsHandler(req: Request, res: Response) {
  const prodId = get(req, "params.productId");
  console.log(prodId);
  const product = await findProduct({ productId: prodId });
  if (!product) {
    return res.sendStatus(404).send("aucun produit");
  }
  return res.send(product);
}

// supprimer
export async function deleteProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  //  if (String(post.user) !== String(userId)) {
  //    return res.sendStatus(401);
  //  }

  await deleteProduct({ productId });
  return res.sendStatus(200);
}
