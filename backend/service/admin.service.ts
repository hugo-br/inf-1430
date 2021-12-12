import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import Admin, { AdminDocument } from "../model/admin.model";

/**
 * @desc    Add this new administrator object into the database
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
 * @desc    Query to find one specific administrator user
 * @params  Query object
 **/
export async function findAdmin(query: FilterQuery<AdminDocument>) {
  return Admin.findOne(query).lean();
}

/**
 * @desc    Query to find all administrator users in database
 **/
export async function findAllAdmins() {
  const filter = {};
  const options = { lean: true };
  return Admin.find(filter, {}, options);
}

/**
 * @desc   Query to validate a password for administrators
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

/**
 * @desc   Query to delete an admin from database
 **/
export async function deleteAdmin(query: FilterQuery<AdminDocument>) {
  return Admin.deleteOne(query);
}
