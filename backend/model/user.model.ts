import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("abcd1234567890", 6);

export interface UserDocument extends mongoose.Document {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// creation de la database
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(),
    },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as UserDocument;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  const hash = await bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

// Used for logging in
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
