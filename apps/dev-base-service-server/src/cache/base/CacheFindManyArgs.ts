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
import { CacheWhereInput } from "./CacheWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CacheOrderByInput } from "./CacheOrderByInput";

@ArgsType()
class CacheFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CacheWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CacheWhereInput, { nullable: true })
  @Type(() => CacheWhereInput)
  where?: CacheWhereInput;

  @ApiProperty({
    required: false,
    type: [CacheOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CacheOrderByInput], { nullable: true })
  @Type(() => CacheOrderByInput)
  orderBy?: Array<CacheOrderByInput>;

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

export { CacheFindManyArgs as CacheFindManyArgs };
