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
import { getProductsHandler } from "@backend/controller/product.controller";

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
  // chercher
  app.get("/api/products/:productId", getProductsHandler);

  // Verifier l'etat du server
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));
};
