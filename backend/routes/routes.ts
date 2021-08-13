import { Express, Request, Response } from "express";
import { createUserHandler } from "@backend/controller/user.controller";
import { createSessionHandler, invalidateSession, getSessionInfo } from "@backend/controller/session.controller";
import {createUserSchema,createSessionSchema} from "@backend/schema/user.schema";
import { validate, requireUser} from "@backend/middleware";

export default (app: Express) => {
  // *** Utilisateur ***

  // Inscription
  app.post("/api/users", validate(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validate(createSessionSchema),
    createSessionHandler
  );

  // Logout
  app.delete(
    "/api/sessions",
    requireUser,
    invalidateSession
  ); 

  // User Session
  app.get(
    "/api/sessions",
    requireUser,
    getSessionInfo
  );


  // *** Utilisateur ***






  // GET /api/posts /api/posts

  app.get("/status", (req: Request, res: Response) => {
    res.send({
      message: "hello everyone",
    });
  });

  app.post("/register", (req: Request, res: Response) => {
    res.send({
      message: `Hello ${req.body.email} your user was registred`,
    });
  });

  // Verifier etat server
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
};
