import { InputJsonValue } from "../../types";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type QueryCacheCreateInput = {
  result?: InputJsonValue;
  expiresAt?: Date | null;
  query?: QueryWhereUniqueInput | null;
};
