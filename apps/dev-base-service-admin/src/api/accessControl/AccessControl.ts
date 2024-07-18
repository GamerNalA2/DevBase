import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type AccessControl = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  resourceType: string | null;
  permissions: JsonValue;
  resource: string | null;
  role?: Role | null;
  resourceTypeField: string | null;
  permissionsField: JsonValue;
  resourceField: string | null;
  roleField: string | null;
};
