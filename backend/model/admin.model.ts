import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("abcd1234567890", 6);

export interface AdminDocument extends mongoose.Document {
  adminId: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// creation de la database
const AdminSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid()
    },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" }
  },
  { timestamps: true }
);

AdminSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as AdminDocument;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  const hash = await bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

// Used for logging in
AdminSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as AdminDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const Admin = mongoose.model<AdminDocument>("Admin", AdminSchema);
export default Admin;
