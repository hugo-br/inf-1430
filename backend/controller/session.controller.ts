import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { validateAdminPassword } from "../service/admin.service";
import { sign } from "../utils/tokens";
import config from "config";
import { get } from "lodash";
import {
  createAccessToken,
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import {
  createAdminAccessToken,
  createAdminSession,
  findAdminSessions,
  updateAdminSession,
} from "../service/session.admin.service";

// sessions pour les USERS
export async function createSessionHandler(req: Request, res: Response) {
  // valider l'email et le mot de passe
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send("Invalid username or password");

  // Creer une session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // creer un token d'access
  const accessToken = createAccessToken({ user, session });

  // creer un token de refresh
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  });

  // envoyer le token
  return res.send({ accessToken, refreshToken });
}

export async function invalidateSession (req: Request, res: Response) {
  // trouver session
  const sectionId = get(req, "user.session");

  // update
  await updateSession({ _id: sectionId }, { valid: false });
  return res.sendStatus(200).send("logout");
}

export async function getSessionInfo (req: Request, res: Response) {
  const userId = get(req, "user._id");
  const session = await findSessions({ user: userId, valid: true });
  return res.send(session);
}


/******************************************************************** */
// sessions pour les ADMINS
export async function createAdminSessionHandler(req: Request, res: Response) {
  
  // valider l'email et le mot de passe
  const admin = await validateAdminPassword(req.body);
  if (!admin) return res.status(401).send("Invalid username or password");

  // Creer une session
  const session = await createAdminSession(admin._id, req.get("user-agent") || "");

  // creer un token d'access
  const accessToken = createAdminAccessToken({ user: admin, session });

  // creer un token de refresh
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  });

  // envoyer le token
  return res.send({ accessToken, refreshToken });
}

export async function invalidateAdminSession (req: Request, res: Response) {
  // trouver session
  const sectionId = get(req, "user.session");

  // update
  await updateAdminSession({ _id: sectionId }, { valid: false });
  return res.sendStatus(200).send("logout");
}

export async function getAdminSessionInfo (req: Request, res: Response) {
  const userId = get(req, "user._id");
  const session = await findAdminSessions({ user: userId, valid: true });
  return res.send(session);
}