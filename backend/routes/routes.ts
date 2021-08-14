import { Express, Request, Response } from "express";
import { validate, requireUser } from "@backend/middleware";
import { createUserHandler } from "@backend/controller/user.controller";
import {
  createSessionHandler,
  invalidateSession,
  getSessionInfo,
} from "@backend/controller/session.controller";
import {
  createUserSchema,
  createSessionSchema,
} from "@backend/schema/user.schema";
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema
} from "@backend/schema/product.schema";
import {
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductsHandler
} from "@backend/controller/product.controller";


export default (app: Express) => {


  //*****************************     Utilisateur    ******************************** */
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


  // *** Products ***

  // creer
  app.post(
    "/api/products",
    [requireUser, validate(createProductSchema)],
    createProductHandler
  );

  // modifier
  app.put(
    "/api/products/:productId",
    [requireUser, validate(updateProductSchema)],
    updateProductHandler
  );

  // chercher
  app.get("/api/products/:productId", getProductsHandler);

  // Supprimer
  app.delete(
    "/api/products/:productId",
    [requireUser, validate(deleteProductSchema)],
    deleteProductHandler
  );

  // Verifier l'etat du server
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
};
