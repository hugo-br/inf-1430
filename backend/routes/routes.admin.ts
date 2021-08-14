import { Express, Request, Response } from "express";
import { validate, requireAdmin } from "@backend/middleware";
import { createAdminHandler } from "@backend/controller/admin.controller";
import {
  createAdminSchema,
  createAdminSessionSchema,
} from "@backend/schema/admin.schema";
import {
  createAdminSessionHandler,
  invalidateAdminSession,
  getAdminSessionInfo,
} from "@backend/controller/session.controller";
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "@backend/schema/product.schema";
import {
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "@backend/controller/product.controller";

const routesAdmin = (app: Express) => {
  //*****************************     Utilisateur    ******************************** */
  // Inscription
  app.post("/api/admin", validate(createAdminSchema), createAdminHandler);

  // Login
  app.post(
    "/api/admin/sessions",
    validate(createAdminSessionSchema),
    createAdminSessionHandler
  );

  // Logout
  app.delete("/api/admin/sessions", requireAdmin, invalidateAdminSession);

  // User Session
  app.get("/api/admin/sessions", requireAdmin, getAdminSessionInfo);
  //***************************************************************************************** */

  //************************************************************
  // Produits
  //************************************************************/

  // creer
  app.post(
    "/api/admin/products",
    [requireAdmin, validate(createProductSchema)],
    createProductHandler
  );

  // modifier
  app.put(
    "/api/admin/products/:productId",
    [requireAdmin, validate(updateProductSchema)],
    updateProductHandler
  );

  // Supprimer
  app.delete(
    "/api/admin/products/:productId",
    [requireAdmin, validate(deleteProductSchema)],
    deleteProductHandler
  );

  // Verifier l'etat du server
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
};

export default routesAdmin;
