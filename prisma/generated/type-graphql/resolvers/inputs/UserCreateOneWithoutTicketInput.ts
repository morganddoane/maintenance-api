import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTicketInput } from "../inputs/UserCreateOrConnectWithoutTicketInput";
import { UserCreateWithoutTicketInput } from "../inputs/UserCreateWithoutTicketInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOneWithoutTicketInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTicketInput, {
    nullable: true
  })
  create?: UserCreateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTicketInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTicketInput | undefined;
}
