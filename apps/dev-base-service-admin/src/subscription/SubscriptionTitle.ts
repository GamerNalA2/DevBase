import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "event";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.event?.toString() || String(record.id);
};
