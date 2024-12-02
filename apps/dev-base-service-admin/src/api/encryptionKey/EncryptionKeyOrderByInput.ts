import { SortOrder } from "../../util/SortOrder";

export type EncryptionKeyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  purpose?: SortOrder;
  algorithm?: SortOrder;
  key?: SortOrder;
  rotatedAt?: SortOrder;
  status?: SortOrder;
  encPurpose?: SortOrder;
  encAlgorithm?: SortOrder;
  encKey?: SortOrder;
  encCreatedAt?: SortOrder;
  encStatus?: SortOrder;
  encRotatedAt?: SortOrder;
};
