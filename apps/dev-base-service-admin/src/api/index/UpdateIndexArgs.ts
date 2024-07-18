import { IndexWhereUniqueInput } from "./IndexWhereUniqueInput";
import { IndexUpdateInput } from "./IndexUpdateInput";

export type UpdateIndexArgs = {
  where: IndexWhereUniqueInput;
  data: IndexUpdateInput;
};
