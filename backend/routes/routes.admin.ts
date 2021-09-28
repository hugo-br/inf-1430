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
import {
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
} from "@backend/schema/category.schema";
import {
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} from "@backend/controller/category.controller";




const routesAdmin = (app: Express) => {


//*** Utilisateurs */ 

  // POST : Inscription
  app.post("/api/admin", validate(createAdminSchema), createAdminHandler);

  // POST: Login
  app.post(
    "/api/admin/sessions",
    validate(createAdminSessionSchema),
    createAdminSessionHandler
  );

  // DELETE: Logout
  app.delete("/api/admin/sessions", requireAdmin, invalidateAdminSession);

  // GET: User Session
  app.get("/api/admin/sessions", requireAdmin, getAdminSessionInfo);
  //***************************************************************************************** */

//*** Produits  */  

  // POST: creer
  app.post(
    "/api/admin/products",
    [requireAdmin, validate(createProductSchema)],
    createProductHandler
  );

  // PUT :modifier
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



//*** Categories  */  

  // creer
  app.post(
    "/api/admin/categories",
    [requireAdmin, validate(createCategorySchema)],
    createCategoryHandler
  );

  // modifier
  app.put(
    "/api/admin/categories/:categoryId",
    [requireAdmin, validate(updateCategorySchema)],
    updateCategoryHandler
  );

  // Supprimer
  app.delete(
    "/api/admin/categories/:categoryId",
    [requireAdmin, validate(deleteCategorySchema)],
    deleteCategoryHandler
  );



  // Verifier l'etat du server
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
};

export default routesAdmin;
