import { InputJsonValue } from "../../types";
import { EndpointWhereUniqueInput } from "../endpoint/EndpointWhereUniqueInput";

export type ApiDocumentationCreateInput = {
  version?: number | null;
  updatedAtField?: Date | null;
  content?: InputJsonValue;
  createdAtField?: Date | null;
  endpoint?: EndpointWhereUniqueInput | null;
};
