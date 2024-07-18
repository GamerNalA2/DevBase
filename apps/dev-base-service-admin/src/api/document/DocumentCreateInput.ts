import { InputJsonValue } from "../../types";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type DocumentCreateInput = {
  data?: InputJsonValue;
  version?: number | null;
  createdBy?: string | null;
  collection?: CollectionWhereUniqueInput | null;
};
