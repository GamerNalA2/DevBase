export type RateLimiterUpdateInput = {
  resourceType?: string | null;
  resource?: string | null;
  limit?: number | null;
  window?: number | null;
  current?: number | null;
  lastReset?: Date | null;
};
