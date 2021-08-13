import { Express, Request, Response } from "express";
import { createUserHandler } from "@backend/controller/user.controller";
import { createUserSchema } from "@backend/schema/user.schema";
import validate from "@backend/middleware/validateRequest";

export default (app: Express) => {
  // *** Utilisateur ***

  // Inscription
  // POST /api/user
  app.post("/api/users", validate(createUserSchema), createUserHandler);

  // Login
  // POST /api/session

  // User Session
  // GET /api/session

  // Logout
  // DELETE /api/session

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
