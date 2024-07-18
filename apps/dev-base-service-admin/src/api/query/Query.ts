import { Subscription } from "../subscription/Subscription";
import { QueryCache } from "../queryCache/QueryCache";

export type Query = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptions?: Array<Subscription>;
  queryCaches?: Array<QueryCache>;
};
