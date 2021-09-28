import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { findAdmin } from "@backend/service/admin.service";

const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = get(req, "user");
  if (!admin) return res.sendStatus(403);

  // verifier si l'usager est valide
  const valid = await findAdmin({ _id: admin });
  if (!valid) return res.sendStatus(403);

  return next();
};

export default requireAdmin;
