import { LeanDocument, FilterQuery, UpdateQuery } from "mongoose";
import config from "config";
import Session, { SessionDocument } from "@backend/model/session.model";
import { sign, decode } from "@backend/utils/tokens";
import { get } from "lodash";
import { UserDocument } from "../model/user.model";
import { findUser } from "./user.service";
import SessionAdmin from "../model/session.admin.model";
import { createAdminAccessToken } from "./session.admin.service";
import { findAdmin } from "./admin.service";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
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

  // Get the user session
  const session = await Session.findById(get(decoded, "_id"));
  if (session) {
    if (!session?.valid) return false;
    const user = await findUser({ _id: session.user });
    if (!user) return false;
    try {
      const accessToken = createAccessToken({ user, session });
      return accessToken;
    } catch (err: any) {
      return false;
    }
  }

  // check if its admin session
  const sessionAdmin = await SessionAdmin.findById(get(decoded, "_id"));
  if (!sessionAdmin || !sessionAdmin?.valid) return false;
  const admin = await findAdmin({ _id: sessionAdmin.user });
  if (!admin) return false;
  try {
    const accessAdminToken = createAdminAccessToken({
      user: admin,
      session: sessionAdmin,
    });
    return accessAdminToken;
  } catch (err: any) {
    return false;
  }
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}
