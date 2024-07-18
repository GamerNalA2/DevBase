import { SortOrder } from "../../util/SortOrder";

export type FieldModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  isRequired?: SortOrder;
  defaultValue?: SortOrder;
  constraints?: SortOrder;
  schemaId?: SortOrder;
};
