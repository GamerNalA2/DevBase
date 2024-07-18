import { UserSessionWhereInput } from "./UserSessionWhereInput";
import { UserSessionOrderByInput } from "./UserSessionOrderByInput";

export type UserSessionFindManyArgs = {
  where?: UserSessionWhereInput;
  orderBy?: Array<UserSessionOrderByInput>;
  skip?: number;
  take?: number;
};
