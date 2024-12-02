import { InputJsonValue } from "../../types";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type QueryCacheUpdateInput = {
  result?: InputJsonValue;
  expiresAt?: Date | null;
  query?: QueryWhereUniqueInput | null;
};
