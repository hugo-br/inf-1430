import { Request, Response } from "express";
import { omit } from "lodash";
import { createAdmin } from "../service/admin.service";
import log from "../logger";

export async function createAdminHandler(req: Request, res: Response) {
  try {
    const admin = await createAdmin(req.body);
    return res.send(omit(admin.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
