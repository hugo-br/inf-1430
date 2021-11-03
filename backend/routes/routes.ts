import { Express, Request, Response } from "express";
import { validate, requireUser } from "@middleware/index";
import { createUserHandler } from "@backend/controller/user.controller";
import {
  createSessionHandler,
  invalidateSession,
  getSessionInfo,
} from "@backend/controller/session.controller";
import { createUserSchema, createSessionSchema } from "@schema/user.schema";
import { getProductsHandler } from "@backend/controller/product.controller";
import {
  getCategoryHandler,
  getAllCategoriesHandler,
} from "@backend/controller/category.controller";

export default (app: Express) => {
  //***************************************************************************************** */
  /*** Utilisateur    
  /**********************/

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

  //***************************************************************************************** */
  /*** Products    
/**********************/

  // [GET]: product
  app.get("/api/products/:productId", getProductsHandler);

  //***************************************************************************************** */
  /*** Category    
/**********************/

  // [GET]: Category
  app.get("/api/category/:categoryId", getCategoryHandler);

  // [GET]: All Categories
  app.get("/api/categories", getAllCategoriesHandler);

  //***************************************************************************************** */
  /*** Autres    
/**********************/

  // Verifier l'etat du server
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));
};
