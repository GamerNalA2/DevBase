import { RateLimiter as TRateLimiter } from "../api/rateLimiter/RateLimiter";

export const RATELIMITER_TITLE_FIELD = "resourceType";

export const RateLimiterTitle = (record: TRateLimiter): string => {
  return record.resourceType?.toString() || String(record.id);
};
