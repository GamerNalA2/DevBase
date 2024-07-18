import { InputJsonValue } from "../../types";
import { EndpointWhereUniqueInput } from "../endpoint/EndpointWhereUniqueInput";

export type ApiDocumentationUpdateInput = {
  version?: number | null;
  updatedAtField?: Date | null;
  content?: InputJsonValue;
  createdAtField?: Date | null;
  endpoint?: EndpointWhereUniqueInput | null;
};
