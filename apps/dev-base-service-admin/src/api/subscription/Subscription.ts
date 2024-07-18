import { User } from "../user/User";
import { Collection } from "../collection/Collection";
import { Query } from "../query/Query";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  event: string | null;
  user?: User | null;
  collection?: Collection | null;
  query?: Query | null;
};
