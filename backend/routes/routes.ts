import { Express, Request, Response } from "express";
import { validate, requireUser } from "@middleware/index";
import { createUserHandler } from "@backend/controller/user.controller";
import {
  createSessionHandler,
  invalidateSession,
  getSessionInfo,
} from "@backend/controller/session.controller";
import { createUserSchema, createSessionSchema } from "@schema/user.schema";
import {
  getProductsHandlerByID,
  getProductsHandler,
  getAllProductsHandler,
} from "@backend/controller/product.controller";
import {
  getCategoryHandler,
  getAllCategoriesHandler,
} from "@backend/controller/category.controller";

export default (app: Express) => {
  // #region  Sessions
  // Inscription
  app.post("/api/users", validate(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validate(createSessionSchema),
    createSessionHandler
  );

  // Logout
  app.delete("/api/sessions", requireUser, invalidateSession);

  // User Session
  app.get("/api/sessions", requireUser, getSessionInfo);

  // #endregion

  /**
   *-----------------------
   * Products public Routes
   *-----------------------
   **/

  /**
   * @func    request [GET]
   * @desc    Get a specific product and return the result as an object
   * @param   String  :productId - product ID
   * @return  Object  Informations on the product
   **/
  app.get("/api/products/", getAllProductsHandler);

  /**
   * @func    request [GET]
   * @desc    Get a specific product and return the result as an object
   * @param   String  :productId - product ID
   * @return  Object  Informations on the product
   **/
  app.get("/api/products/:productId", getProductsHandlerByID);

  /**
   * @func    request [GET]
   * @desc    Get a specific product and return the result as an object
   * @param   Query  :query - query (mongoose-query-parser)
   * @return  Object  Informations on the product
   **/
  app.get("/api/products/find/:query", getProductsHandler);

  /**
   *-----------------------
   * Categories public Routes
   *-----------------------
   **/

  /**
   * @func    request [GET]
   * @desc    Chercher une category et tous les produits de cette categorie
   * @param   String  :categoryId - ID de la category
   * @return  Array   Information categorie et produits
   **/
  app.get("/api/category/:categoryId", getCategoryHandler);

  // [GET]: All Categories
  app.get("/api/categories", getAllCategoriesHandler);

  //***************************************************************************************** */
  /*** Autres    
/**********************/

  // Verifier l'etat du server
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));
};
