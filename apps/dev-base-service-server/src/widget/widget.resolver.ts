import * as graphql from "@nestjs/graphql";
import { WidgetResolverBase } from "./base/widget.resolver.base";
import { Widget } from "./base/Widget";
import { WidgetService } from "./widget.service";

@graphql.Resolver(() => Widget)
export class WidgetResolver extends WidgetResolverBase {
  constructor(protected readonly service: WidgetService) {
    super(service);
  }
}
