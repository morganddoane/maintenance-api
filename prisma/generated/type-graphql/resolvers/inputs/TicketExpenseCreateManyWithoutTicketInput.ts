import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateOrConnectWithoutTicketInput } from "../inputs/TicketExpenseCreateOrConnectWithoutTicketInput";
import { TicketExpenseCreateWithoutTicketInput } from "../inputs/TicketExpenseCreateWithoutTicketInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseCreateManyWithoutTicketInput {
  @TypeGraphQL.Field(_type => [TicketExpenseCreateWithoutTicketInput], {
    nullable: true
  })
  create?: TicketExpenseCreateWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseCreateOrConnectWithoutTicketInput], {
    nullable: true
  })
  connectOrCreate?: TicketExpenseCreateOrConnectWithoutTicketInput[] | undefined;
}
