import { WidgetWhereInput } from "./WidgetWhereInput";
import { WidgetOrderByInput } from "./WidgetOrderByInput";

export type WidgetFindManyArgs = {
  where?: WidgetWhereInput;
  orderBy?: Array<WidgetOrderByInput>;
  skip?: number;
  take?: number;
};
