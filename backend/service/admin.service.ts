import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import Admin, { AdminDocument } from "../model/admin.model";

/**
 * @desc    Add this new admin object into the database
 * @params  Admin object
 **/
export async function createAdmin(input: DocumentDefinition<AdminDocument>) {
  try {
    return await Admin.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

/**
 * @desc    Query to find one specific admin user
 * @params  Query object
 **/
export async function findAdmin(query: FilterQuery<AdminDocument>) {
  return Admin.findOne(query).lean();
}

/**
 * @desc    Query to find all admin users in db
 **/
export async function findAllAdmins() {
  const filter = {};
  const options = { lean: true };
  return Admin.find(filter, {}, options);
}

/**
 * @desc   Validate password
 **/
export async function validateAdminPassword({
  email,
  password,
}: {
  email: AdminDocument["email"];
  password: string;
}) {
  const admin = await Admin.findOne({ email });
  if (!admin) return false;
  const isValid = await admin.comparePassword(password);
  if (!isValid) return false;
  return omit(admin.toJSON(), "password");
}
