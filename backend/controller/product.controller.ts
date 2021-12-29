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
  findProductByID,
} from "../service/product.service";
import { updateCategoryAfterProductDeleted } from "../service/category.service";

/**
 * @desc    Handler to create a new product
 * @param   Product  object product
 * @param   adminId  id of admin
 */
export async function createProductHandler(req: Request, res: Response) {
  const adminId = get(req, "user._id");
  const body = req.body;
  try {
    const product = await createProduct({ ...body, lastUser: adminId });
    return res.send({ message: "Product added", confirm: true });
  } catch (err: any) {
    return res.send({ message: "Error : " + err, confirm: false });
  }
}

/**
 * @desc    Update a specific product in the database
 * @param   String  :productId - product ID
 * @return  Object  Informations on the product
 **/
export async function updateProductHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");
  const update = req.body;
  const product = await findProduct({ productId });
  if (!product) {
    return res.send("Product not modified");
  }
  // if (String(product.user) !== userId) {
  //   return res.sendStatus(401);
  // }
  try {
    const updatedProduct = await findAndUpdate({ productId }, update, {
      new: true,
    });
    return res.send("Product modified");
  } catch (err: any) {
    return res.send("Error : " + err);
  }
}

/**
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
export async function getProductsHandlerByProductID(
  req: Request,
  res: Response
) {
  const prodId = get(req, "params.productId");
  const product = await findProduct({ productId: prodId });
  if (!product) {
    return res.sendStatus(404).send("aucun produit");
  }
  return res.send(product);
}

export async function getProductsHandlerByID(req: Request, res: Response) {
  const prodId = get(req, "params.productId");
  const product = await findProductByID(prodId);
  if (!product) {
    return res.sendStatus(404).send("aucun produit");
  }
  return res.send(product);
}

export async function getProductsHandler(req: Request, res: Response) {
  const parser = new MongooseQueryParser();
  const request = get(req, "params.query");
  const parsed = parser.parse(request);
  const product = await findProducts(parsed);
  if (!product) {
    return res.send({ confirm: false, message: "aucun produit" });
  }
  return res.send({ confirm: true, products: product });
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
