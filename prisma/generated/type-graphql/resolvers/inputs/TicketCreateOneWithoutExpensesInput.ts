import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutexpensesInput } from "../inputs/TicketCreateOrConnectWithoutexpensesInput";
import { TicketCreateWithoutExpensesInput } from "../inputs/TicketCreateWithoutExpensesInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateOneWithoutExpensesInput {
  @TypeGraphQL.Field(_type => TicketCreateWithoutExpensesInput, {
    nullable: true
  })
  create?: TicketCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TicketCreateOrConnectWithoutexpensesInput, {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutexpensesInput | undefined;
}
