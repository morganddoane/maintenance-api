import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTicketBlockInput } from "../inputs/UserCreateOrConnectWithoutTicketBlockInput";
import { UserCreateWithoutTicketBlockInput } from "../inputs/UserCreateWithoutTicketBlockInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOneWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTicketBlockInput, {
    nullable: true
  })
  create?: UserCreateWithoutTicketBlockInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTicketBlockInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTicketBlockInput | undefined;
}
