import { InputJsonValue } from "../../types";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type IndexUpdateInput = {
  name?: string | null;
  fields?: InputJsonValue;
  isUnique?: boolean | null;
  collection?: CollectionWhereUniqueInput | null;
};
