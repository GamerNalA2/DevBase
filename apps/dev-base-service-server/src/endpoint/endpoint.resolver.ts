import * as graphql from "@nestjs/graphql";
import { EndpointResolverBase } from "./base/endpoint.resolver.base";
import { Endpoint } from "./base/Endpoint";
import { EndpointService } from "./endpoint.service";

@graphql.Resolver(() => Endpoint)
export class EndpointResolver extends EndpointResolverBase {
  constructor(protected readonly service: EndpointService) {
    super(service);
  }
}
