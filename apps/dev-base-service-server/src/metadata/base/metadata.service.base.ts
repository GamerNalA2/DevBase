/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Metadata as PrismaMetadata } from "@prisma/client";

export class MetadataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MetadataCountArgs, "select">): Promise<number> {
    return this.prisma.metadata.count(args);
  }

  async metadataItems(
    args: Prisma.MetadataFindManyArgs
  ): Promise<PrismaMetadata[]> {
    return this.prisma.metadata.findMany(args);
  }
  async metadata(
    args: Prisma.MetadataFindUniqueArgs
  ): Promise<PrismaMetadata | null> {
    return this.prisma.metadata.findUnique(args);
  }
  async createMetadata(
    args: Prisma.MetadataCreateArgs
  ): Promise<PrismaMetadata> {
    return this.prisma.metadata.create(args);
  }
  async updateMetadata(
    args: Prisma.MetadataUpdateArgs
  ): Promise<PrismaMetadata> {
    return this.prisma.metadata.update(args);
  }
  async deleteMetadata(
    args: Prisma.MetadataDeleteArgs
  ): Promise<PrismaMetadata> {
    return this.prisma.metadata.delete(args);
  }
}
