/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { IndexWhereUniqueInput } from "../../index/base/IndexWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IndexUpdateManyWithoutCollectionsInput {
  @Field(() => [IndexWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndexWhereUniqueInput],
  })
  connect?: Array<IndexWhereUniqueInput>;

  @Field(() => [IndexWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndexWhereUniqueInput],
  })
  disconnect?: Array<IndexWhereUniqueInput>;

  @Field(() => [IndexWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IndexWhereUniqueInput],
  })
  set?: Array<IndexWhereUniqueInput>;
}

export { IndexUpdateManyWithoutCollectionsInput as IndexUpdateManyWithoutCollectionsInput };
