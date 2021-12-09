import { Request, Response } from "express";
import { omit } from "lodash";
import { createAdmin, findAllAdmins } from "../service/admin.service";

/**
 * @params  Admin object
 * @desc    Send request to create a new administrator
 **/
export async function createAdminHandler(req: Request, res: Response) {
  try {
    const admin = await createAdmin(req.body);
    return res.send({ admin: omit(admin.toJSON(), "password"), confirm: true });
  } catch (e: any) {
    return res
      .status(200)
      .send({ errorMsg: ["account_created"], confirm: false });
  }
}

/**
 * @desc    Return all the administrators
 **/
export async function getAdminUsers(req: Request, res: Response) {
  try {
    const admins = await findAllAdmins();
    if (!admins) {
      return res.sendStatus(404).send("aucun produits");
    }
    return res.send(admins);
  } catch (e: any) {
    return res.status(200).send({ errorMsg: ["system_error"], confirm: false });
  }
}
