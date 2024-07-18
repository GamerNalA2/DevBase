import { EndpointWhereInput } from "./EndpointWhereInput";
import { EndpointOrderByInput } from "./EndpointOrderByInput";

export type EndpointFindManyArgs = {
  where?: EndpointWhereInput;
  orderBy?: Array<EndpointOrderByInput>;
  skip?: number;
  take?: number;
};
