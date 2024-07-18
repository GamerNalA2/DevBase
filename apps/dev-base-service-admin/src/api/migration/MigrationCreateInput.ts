export type MigrationCreateInput = {
  name?: string | null;
  description?: string | null;
  appliedAt?: Date | null;
  version?: number | null;
  status?: string | null;
};
