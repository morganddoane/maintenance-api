import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTicketResponseInput } from "../inputs/UserCreateOrConnectWithoutTicketResponseInput";
import { UserCreateWithoutTicketResponseInput } from "../inputs/UserCreateWithoutTicketResponseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOneWithoutTicketResponseInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTicketResponseInput, {
    nullable: true
  })
  create?: UserCreateWithoutTicketResponseInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTicketResponseInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTicketResponseInput | undefined;
}
