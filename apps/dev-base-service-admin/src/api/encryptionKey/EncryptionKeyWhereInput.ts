import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EncryptionKeyWhereInput = {
  id?: StringFilter;
  purpose?: StringNullableFilter;
  algorithm?: StringNullableFilter;
  key?: StringNullableFilter;
  rotatedAt?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  encPurpose?: StringNullableFilter;
  encAlgorithm?: StringNullableFilter;
  encKey?: StringNullableFilter;
  encCreatedAt?: DateTimeNullableFilter;
  encStatus?: StringNullableFilter;
  encRotatedAt?: DateTimeNullableFilter;
};
