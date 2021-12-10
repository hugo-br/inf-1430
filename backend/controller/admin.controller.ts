import { Request, Response } from "express";
import { omit } from "lodash";
import { createAdmin, findAllAdmins, findAdmin } from "../service/admin.service";
import { get } from "lodash";

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
      return res.sendStatus(404).send({ errorMsg: ["admin_not_found"], confirm: false });
    }
    return res.send(admins);
  } catch (e: any) {
    return res.status(200).send({ errorMsg: ["system_error"], confirm: false });
  }
}

/**
 * @desc    Find and return one specific administrators
 * @params  adminId
 **/
 export async function getOneAdminUsers(req: Request, res: Response) {
  try {
    const id = get(req, "params.adminId");
    const admin = await findAdmin({adminId: id});
    if (!admin) {
      return res.sendStatus(404).send({ errorMsg: ["admin_not_found"], confirm: false });
    }
    return res.send({ admin: omit(admin, "password", "confirmPassword"), confirm: true });
  } catch (e: any) {
    return res.status(200).send({ errorMsg: ["system_error"], confirm: false });
  }
}