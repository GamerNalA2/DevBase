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
import { Schema } from "./Schema";
import { SchemaCountArgs } from "./SchemaCountArgs";
import { SchemaFindManyArgs } from "./SchemaFindManyArgs";
import { Query } from "../../query/base/Query";
import { SchemaFindUniqueArgs } from "./SchemaFindUniqueArgs";
import { CreateSchemaArgs } from "./CreateSchemaArgs";
import { UpdateSchemaArgs } from "./UpdateSchemaArgs";
import { DeleteSchemaArgs } from "./DeleteSchemaArgs";
import { FieldModelFindManyArgs } from "../../fieldModel/base/FieldModelFindManyArgs";
import { FieldModel } from "../../fieldModel/base/FieldModel";
import { Collection } from "../../collection/base/Collection";
import { SchemaService } from "../schema.service";
@graphql.Resolver(() => Schema)
export class SchemaResolverBase {
  constructor(protected readonly service: SchemaService) {}

  async _schemataMeta(
    @graphql.Args() args: SchemaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Schema])
  async schemata(@graphql.Args() args: SchemaFindManyArgs): Promise<Schema[]> {
    return this.service.schemata(args);
  }

  @graphql.Query(() => Schema, { nullable: true })
  async schema(
    @graphql.Args() args: SchemaFindUniqueArgs
  ): Promise<Schema | null> {
    const result = await this.service.schema(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Schema)
  async createSchema(@graphql.Args() args: CreateSchemaArgs): Promise<Schema> {
    return await this.service.createSchema({
      ...args,
      data: {
        ...args.data,

        collection: args.data.collection
          ? {
              connect: args.data.collection,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Schema)
  async updateSchema(
    @graphql.Args() args: UpdateSchemaArgs
  ): Promise<Schema | null> {
    try {
      return await this.service.updateSchema({
        ...args,
        data: {
          ...args.data,

          collection: args.data.collection
            ? {
                connect: args.data.collection,
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

  @graphql.Mutation(() => Schema)
  async deleteSchema(
    @graphql.Args() args: DeleteSchemaArgs
  ): Promise<Schema | null> {
    try {
      return await this.service.deleteSchema(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [FieldModel], { name: "fields" })
  async findFields(
    @graphql.Parent() parent: Schema,
    @graphql.Args() args: FieldModelFindManyArgs
  ): Promise<FieldModel[]> {
    const results = await this.service.findFields(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Collection, {
    nullable: true,
    name: "collection",
  })
  async getCollection(
    @graphql.Parent() parent: Schema
  ): Promise<Collection | null> {
    const result = await this.service.getCollection(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
