import { LeanDocument, FilterQuery, UpdateQuery } from "mongoose";
import config from "config";
import SessionAdmin, {
  SessionAdminDocument,
} from "@backend/model/session.admin.model";
import { sign, decode } from "@backend/utils/tokens";
import { get } from "lodash";
import { AdminDocument } from "../model/admin.model";
import { findAdmin } from "./admin.service";

export async function createAdminSession(adminId: string, userAgent: string) {
  const session = await SessionAdmin.create({ user: adminId, userAgent });
  return session.toJSON();
}

export function createAdminAccessToken({
  user,
  session,
}: {
  user:
    | Omit<AdminDocument, "password">
    | LeanDocument<Omit<AdminDocument, "password">>;
  session:
    | Omit<SessionAdminDocument, "password">
    | LeanDocument<Omit<SessionAdminDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") }
  );

  return accessToken;
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  // Decode the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  // Get the session
  const session = await SessionAdmin.findById(get(decoded, "_id"));

  // Make sure the session is still valid
  if (!session || !session?.valid) return false;
  const admin = await findAdmin({ _id: session.user });
  if (!admin) return false;
  const accessToken = createAdminAccessToken({ user: admin, session });
  return accessToken;
}

export async function updateAdminSession(
  query: FilterQuery<SessionAdminDocument>,
  update: UpdateQuery<SessionAdminDocument>
) {
  return SessionAdmin.updateOne(query, update);
}

export async function findAdminSessions(
  query: FilterQuery<SessionAdminDocument>
) {
  return SessionAdmin.find(query).lean();
}
