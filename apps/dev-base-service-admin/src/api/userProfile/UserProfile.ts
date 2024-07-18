import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bio: string | null;
  location: string | null;
  website: string | null;
  socialLinks: JsonValue;
  skills?: Array<"Option1">;
  experience: JsonValue;
  user?: User | null;
};
