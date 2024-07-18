import { AccessControlWhereInput } from "./AccessControlWhereInput";
import { AccessControlOrderByInput } from "./AccessControlOrderByInput";

export type AccessControlFindManyArgs = {
  where?: AccessControlWhereInput;
  orderBy?: Array<AccessControlOrderByInput>;
  skip?: number;
  take?: number;
};
