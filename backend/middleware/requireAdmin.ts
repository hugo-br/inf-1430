import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { findAdmin } from "@backend/service/admin.service";

const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = get(req, "user");
  if (!admin)
    return res
      .sendStatus(403)
      .send({ confirm: false, errorMsg: ["forbidden"] });

  // verifier si l'usager est valide
  const valid = await findAdmin({ _id: admin });
  if (!valid)
    return res
      .sendStatus(403)
      .send({ confirm: false, errorMsg: ["admin_not_valid"] });

  return next();
};

export default requireAdmin;
