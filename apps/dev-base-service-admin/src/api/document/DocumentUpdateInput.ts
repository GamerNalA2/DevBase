import { InputJsonValue } from "../../types";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type DocumentUpdateInput = {
  data?: InputJsonValue;
  version?: number | null;
  createdBy?: string | null;
  collection?: CollectionWhereUniqueInput | null;
};
