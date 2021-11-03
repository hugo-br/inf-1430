import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import Admin, { AdminDocument } from "../model/admin.model";

// Ajouter dans la bd
export async function createAdmin(input: DocumentDefinition<AdminDocument>) {
  try {
    return await Admin.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

// Retrouver dans la bd
export async function findAdmin(query: FilterQuery<AdminDocument>) {
  return Admin.findOne(query).lean();
}

// valide le mot de passe
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
