import mongoose from "mongoose";
import { AdminDocument } from "./admin.model";

export interface SessionAdminDocument extends mongoose.Document {
  user: AdminDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

// creation de la database
const SessionAdminSchema = new mongoose.Schema(
  {
    email: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const SessionAdmin = mongoose.model<SessionAdminDocument>(
  "SessionAdmin",
  SessionAdminSchema
);
export default SessionAdmin;
