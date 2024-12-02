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
import { UserProfileService } from "../userProfile.service";
import { UserProfileCreateInput } from "./UserProfileCreateInput";
import { UserProfile } from "./UserProfile";
import { UserProfileFindManyArgs } from "./UserProfileFindManyArgs";
import { UserProfileWhereUniqueInput } from "./UserProfileWhereUniqueInput";
import { UserProfileUpdateInput } from "./UserProfileUpdateInput";

export class UserProfileControllerBase {
  constructor(protected readonly service: UserProfileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserProfile })
  async createUserProfile(
    @common.Body() data: UserProfileCreateInput
  ): Promise<UserProfile> {
    return await this.service.createUserProfile({
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
        bio: true,
        location: true,
        website: true,
        socialLinks: true,
        skills: true,
        experience: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserProfile] })
  @ApiNestedQuery(UserProfileFindManyArgs)
  async userProfiles(@common.Req() request: Request): Promise<UserProfile[]> {
    const args = plainToClass(UserProfileFindManyArgs, request.query);
    return this.service.userProfiles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        bio: true,
        location: true,
        website: true,
        socialLinks: true,
        skills: true,
        experience: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userProfile(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    const result = await this.service.userProfile({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        bio: true,
        location: true,
        website: true,
        socialLinks: true,
        skills: true,
        experience: true,

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
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserProfile(
    @common.Param() params: UserProfileWhereUniqueInput,
    @common.Body() data: UserProfileUpdateInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.updateUserProfile({
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
          bio: true,
          location: true,
          website: true,
          socialLinks: true,
          skills: true,
          experience: true,

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
  @swagger.ApiOkResponse({ type: UserProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserProfile(
    @common.Param() params: UserProfileWhereUniqueInput
  ): Promise<UserProfile | null> {
    try {
      return await this.service.deleteUserProfile({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          bio: true,
          location: true,
          website: true,
          socialLinks: true,
          skills: true,
          experience: true,

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
