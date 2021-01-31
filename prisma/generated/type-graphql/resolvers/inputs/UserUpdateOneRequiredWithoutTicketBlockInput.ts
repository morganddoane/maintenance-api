import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTicketBlockInput } from "../inputs/UserCreateOrConnectWithoutTicketBlockInput";
import { UserCreateWithoutTicketBlockInput } from "../inputs/UserCreateWithoutTicketBlockInput";
import { UserUpdateWithoutTicketBlockInput } from "../inputs/UserUpdateWithoutTicketBlockInput";
import { UserUpsertWithoutTicketBlockInput } from "../inputs/UserUpsertWithoutTicketBlockInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTicketBlockInput, {
    nullable: true
  })
  create?: UserCreateWithoutTicketBlockInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketBlockInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTicketBlockInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTicketBlockInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTicketBlockInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTicketBlockInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTicketBlockInput | undefined;
}
