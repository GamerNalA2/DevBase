import { UserSession as TUserSession } from "../api/userSession/UserSession";

export const USERSESSION_TITLE_FIELD = "token";

export const UserSessionTitle = (record: TUserSession): string => {
  return record.token?.toString() || String(record.id);
};
