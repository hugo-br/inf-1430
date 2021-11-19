import { Request, Response } from "express";
import { MongooseQueryParser } from "mongoose-query-parser";
import { get } from "lodash";
import {
  createProduct,
  findProduct,
  findProducts,
  findAndUpdate,
  deleteProduct,
  findAllProducts,
} from "../service/product.service";
import { updateCategoryAfterProductDeleted } from "../service/category.service";

// creer
export async function createProductHandler(req: Request, res: Response) {
  const adminId = get(req, "user._id");
  const body = req.body;
  try {
    const product = await createProduct({ ...body, lastUser: adminId });
    return res.send("Product added");
  } catch (err: any) {
    return res.send("Error : " + err);
  }
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

/**
 * @func    async
 * @desc    Call function to get all products from database
 * @return  Array  Return all products on database
 **/
export async function getAllProductsHandler(req: Request, res: Response) {
  const products = await findAllProducts();
  if (!products) {
    return res.sendStatus(404).send("aucun produits");
  }
  return res.send(products);
}

// retourner
export async function getProductsHandlerByID(req: Request, res: Response) {
  const prodId = get(req, "params.productId");
  console.log(prodId);
  const product = await findProduct({ productId: prodId });
  if (!product) {
    return res.sendStatus(404).send("aucun produit");
  }
  return res.send(product);
}

export async function getProductsHandler(req: Request, res: Response) {
  const parser = new MongooseQueryParser();
  const request = get(req, "params.query");
  const parsed = parser.parse(request);
  console.log("parsed");
  console.log(parsed);
  const product = await findProducts(parsed);
  console.log(product);
  /* 
  if (!product) {
    return res.sendStatus(404).send("aucun produit");
  }
  return res.send(product); */
  return res.send(200);
}

// supprimer
export async function deleteProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  await deleteProduct({ productId });
  await updateCategoryAfterProductDeleted(product);
  return res.sendStatus(200);
}
