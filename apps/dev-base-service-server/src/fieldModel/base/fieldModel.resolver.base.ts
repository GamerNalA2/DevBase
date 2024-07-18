/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FieldModel } from "./FieldModel";
import { FieldModelCountArgs } from "./FieldModelCountArgs";
import { FieldModelFindManyArgs } from "./FieldModelFindManyArgs";
import { Query } from "../../query/base/Query";
import { FieldModelFindUniqueArgs } from "./FieldModelFindUniqueArgs";
import { CreateFieldModelArgs } from "./CreateFieldModelArgs";
import { UpdateFieldModelArgs } from "./UpdateFieldModelArgs";
import { DeleteFieldModelArgs } from "./DeleteFieldModelArgs";
import { Schema } from "../../schema/base/Schema";
import { FieldModelService } from "../fieldModel.service";
@graphql.Resolver(() => FieldModel)
export class FieldModelResolverBase {
  constructor(protected readonly service: FieldModelService) {}

  async _fieldModelsMeta(
    @graphql.Args() args: FieldModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FieldModel])
  async fieldModels(
    @graphql.Args() args: FieldModelFindManyArgs
  ): Promise<FieldModel[]> {
    return this.service.fieldModels(args);
  }

  @graphql.Query(() => FieldModel, { nullable: true })
  async fieldModel(
    @graphql.Args() args: FieldModelFindUniqueArgs
  ): Promise<FieldModel | null> {
    const result = await this.service.fieldModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FieldModel)
  async createFieldModel(
    @graphql.Args() args: CreateFieldModelArgs
  ): Promise<FieldModel> {
    return await this.service.createFieldModel({
      ...args,
      data: {
        ...args.data,

        schema: args.data.schema
          ? {
              connect: args.data.schema,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FieldModel)
  async updateFieldModel(
    @graphql.Args() args: UpdateFieldModelArgs
  ): Promise<FieldModel | null> {
    try {
      return await this.service.updateFieldModel({
        ...args,
        data: {
          ...args.data,

          schema: args.data.schema
            ? {
                connect: args.data.schema,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FieldModel)
  async deleteFieldModel(
    @graphql.Args() args: DeleteFieldModelArgs
  ): Promise<FieldModel | null> {
    try {
      return await this.service.deleteFieldModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Schema, {
    nullable: true,
    name: "schema",
  })
  async getSchema(
    @graphql.Parent() parent: FieldModel
  ): Promise<Schema | null> {
    const result = await this.service.getSchema(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
