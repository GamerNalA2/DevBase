export type Migration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  appliedAt: Date | null;
  version: number | null;
  status: string | null;
};
