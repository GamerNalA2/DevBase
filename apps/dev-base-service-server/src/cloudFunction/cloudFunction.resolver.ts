import * as graphql from "@nestjs/graphql";
import { CloudFunctionResolverBase } from "./base/cloudFunction.resolver.base";
import { CloudFunction } from "./base/CloudFunction";
import { CloudFunctionService } from "./cloudFunction.service";

@graphql.Resolver(() => CloudFunction)
export class CloudFunctionResolver extends CloudFunctionResolverBase {
  constructor(protected readonly service: CloudFunctionService) {
    super(service);
  }
}
