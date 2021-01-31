import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTicketExpenseInput } from "../inputs/UserCreateOrConnectWithoutTicketExpenseInput";
import { UserCreateWithoutTicketExpenseInput } from "../inputs/UserCreateWithoutTicketExpenseInput";
import { UserUpdateWithoutTicketExpenseInput } from "../inputs/UserUpdateWithoutTicketExpenseInput";
import { UserUpsertWithoutTicketExpenseInput } from "../inputs/UserUpsertWithoutTicketExpenseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTicketExpenseInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTicketExpenseInput, {
    nullable: true
  })
  create?: UserCreateWithoutTicketExpenseInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketExpenseInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTicketExpenseInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTicketExpenseInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTicketExpenseInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTicketExpenseInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTicketExpenseInput | undefined;
}
