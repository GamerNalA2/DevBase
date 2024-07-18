import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type AnalyticsEventUpdateInput = {
  eventType?: string | null;
  eventData?: InputJsonValue;
  timestamp?: Date | null;
  context?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  collection?: CollectionWhereUniqueInput | null;
};
