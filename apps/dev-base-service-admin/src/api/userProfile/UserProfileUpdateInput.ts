import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  bio?: string | null;
  location?: string | null;
  website?: string | null;
  socialLinks?: InputJsonValue;
  skills?: Array<"Option1">;
  experience?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
