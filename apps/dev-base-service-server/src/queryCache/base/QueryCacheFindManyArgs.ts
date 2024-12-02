/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QueryCacheWhereInput } from "./QueryCacheWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QueryCacheOrderByInput } from "./QueryCacheOrderByInput";

@ArgsType()
class QueryCacheFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QueryCacheWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QueryCacheWhereInput, { nullable: true })
  @Type(() => QueryCacheWhereInput)
  where?: QueryCacheWhereInput;

  @ApiProperty({
    required: false,
    type: [QueryCacheOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QueryCacheOrderByInput], { nullable: true })
  @Type(() => QueryCacheOrderByInput)
  orderBy?: Array<QueryCacheOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QueryCacheFindManyArgs as QueryCacheFindManyArgs };
