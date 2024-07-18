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
import { WebSocketWhereUniqueInput } from "./WebSocketWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WebSocketUpdateInput } from "./WebSocketUpdateInput";

@ArgsType()
class UpdateWebSocketArgs {
  @ApiProperty({
    required: true,
    type: () => WebSocketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebSocketWhereUniqueInput)
  @Field(() => WebSocketWhereUniqueInput, { nullable: false })
  where!: WebSocketWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WebSocketUpdateInput,
  })
  @ValidateNested()
  @Type(() => WebSocketUpdateInput)
  @Field(() => WebSocketUpdateInput, { nullable: false })
  data!: WebSocketUpdateInput;
}

export { UpdateWebSocketArgs as UpdateWebSocketArgs };
