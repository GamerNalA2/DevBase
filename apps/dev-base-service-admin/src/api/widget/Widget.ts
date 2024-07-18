import { JsonValue } from "type-fest";
import { Dashboard } from "../dashboard/Dashboard";

export type Widget = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  configField: JsonValue;
  position: JsonValue;
  dashboard?: Dashboard | null;
};
