import * as graphql from "@nestjs/graphql";
import { ApiDocumentationResolverBase } from "./base/apiDocumentation.resolver.base";
import { ApiDocumentation } from "./base/ApiDocumentation";
import { ApiDocumentationService } from "./apiDocumentation.service";

@graphql.Resolver(() => ApiDocumentation)
export class ApiDocumentationResolver extends ApiDocumentationResolverBase {
  constructor(protected readonly service: ApiDocumentationService) {
    super(service);
  }
}
