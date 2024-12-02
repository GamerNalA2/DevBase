/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ApiDocumentationService } from "../apiDocumentation.service";
import { ApiDocumentationCreateInput } from "./ApiDocumentationCreateInput";
import { ApiDocumentation } from "./ApiDocumentation";
import { ApiDocumentationFindManyArgs } from "./ApiDocumentationFindManyArgs";
import { ApiDocumentationWhereUniqueInput } from "./ApiDocumentationWhereUniqueInput";
import { ApiDocumentationUpdateInput } from "./ApiDocumentationUpdateInput";

export class ApiDocumentationControllerBase {
  constructor(protected readonly service: ApiDocumentationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApiDocumentation })
  async createApiDocumentation(
    @common.Body() data: ApiDocumentationCreateInput
  ): Promise<ApiDocumentation> {
    return await this.service.createApiDocumentation({
      data: {
        ...data,

        endpoint: data.endpoint
          ? {
              connect: data.endpoint,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        updatedAtField: true,
        content: true,
        createdAtField: true,

        endpoint: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApiDocumentation] })
  @ApiNestedQuery(ApiDocumentationFindManyArgs)
  async apiDocumentations(
    @common.Req() request: Request
  ): Promise<ApiDocumentation[]> {
    const args = plainToClass(ApiDocumentationFindManyArgs, request.query);
    return this.service.apiDocumentations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        updatedAtField: true,
        content: true,
        createdAtField: true,

        endpoint: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApiDocumentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async apiDocumentation(
    @common.Param() params: ApiDocumentationWhereUniqueInput
  ): Promise<ApiDocumentation | null> {
    const result = await this.service.apiDocumentation({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        updatedAtField: true,
        content: true,
        createdAtField: true,

        endpoint: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ApiDocumentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApiDocumentation(
    @common.Param() params: ApiDocumentationWhereUniqueInput,
    @common.Body() data: ApiDocumentationUpdateInput
  ): Promise<ApiDocumentation | null> {
    try {
      return await this.service.updateApiDocumentation({
        where: params,
        data: {
          ...data,

          endpoint: data.endpoint
            ? {
                connect: data.endpoint,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          updatedAtField: true,
          content: true,
          createdAtField: true,

          endpoint: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ApiDocumentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApiDocumentation(
    @common.Param() params: ApiDocumentationWhereUniqueInput
  ): Promise<ApiDocumentation | null> {
    try {
      return await this.service.deleteApiDocumentation({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          updatedAtField: true,
          content: true,
          createdAtField: true,

          endpoint: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
