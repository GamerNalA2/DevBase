import { StringFilter } from "../../util/StringFilter";
import { RestorePointListRelationFilter } from "../restorePoint/RestorePointListRelationFilter";

export type BackupWhereInput = {
  id?: StringFilter;
  restorePoints?: RestorePointListRelationFilter;
};
