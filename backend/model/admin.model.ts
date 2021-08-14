import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface AdminDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// creation de la database
const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
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
