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
import { WebSocketService } from "../webSocket.service";
import { WebSocketCreateInput } from "./WebSocketCreateInput";
import { WebSocket } from "./WebSocket";
import { WebSocketFindManyArgs } from "./WebSocketFindManyArgs";
import { WebSocketWhereUniqueInput } from "./WebSocketWhereUniqueInput";
import { WebSocketUpdateInput } from "./WebSocketUpdateInput";

export class WebSocketControllerBase {
  constructor(protected readonly service: WebSocketService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WebSocket })
  async createWebSocket(
    @common.Body() data: WebSocketCreateInput
  ): Promise<WebSocket> {
    return await this.service.createWebSocket({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        disconnectedAt: true,
        connectionId: true,
        status: true,
        connectedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WebSocket] })
  @ApiNestedQuery(WebSocketFindManyArgs)
  async webSockets(@common.Req() request: Request): Promise<WebSocket[]> {
    const args = plainToClass(WebSocketFindManyArgs, request.query);
    return this.service.webSockets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        disconnectedAt: true,
        connectionId: true,
        status: true,
        connectedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WebSocket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async webSocket(
    @common.Param() params: WebSocketWhereUniqueInput
  ): Promise<WebSocket | null> {
    const result = await this.service.webSocket({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        disconnectedAt: true,
        connectionId: true,
        status: true,
        connectedAt: true,

        user: {
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
  @swagger.ApiOkResponse({ type: WebSocket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWebSocket(
    @common.Param() params: WebSocketWhereUniqueInput,
    @common.Body() data: WebSocketUpdateInput
  ): Promise<WebSocket | null> {
    try {
      return await this.service.updateWebSocket({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          disconnectedAt: true,
          connectionId: true,
          status: true,
          connectedAt: true,

          user: {
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
  @swagger.ApiOkResponse({ type: WebSocket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWebSocket(
    @common.Param() params: WebSocketWhereUniqueInput
  ): Promise<WebSocket | null> {
    try {
      return await this.service.deleteWebSocket({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          disconnectedAt: true,
          connectionId: true,
          status: true,
          connectedAt: true,

          user: {
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
