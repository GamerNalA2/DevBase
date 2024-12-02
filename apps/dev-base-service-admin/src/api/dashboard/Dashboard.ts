import { JsonValue } from "type-fest";
import { Widget } from "../widget/Widget";

export type Dashboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  layout: JsonValue;
  isPublic: boolean | null;
  owner: string | null;
  widgets?: Array<Widget>;
};
