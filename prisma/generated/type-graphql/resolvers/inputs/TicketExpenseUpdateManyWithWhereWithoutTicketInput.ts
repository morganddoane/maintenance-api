import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseScalarWhereInput } from "../inputs/TicketExpenseScalarWhereInput";
import { TicketExpenseUpdateManyMutationInput } from "../inputs/TicketExpenseUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpdateManyWithWhereWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketExpenseScalarWhereInput, {
    nullable: false
  })
  where!: TicketExpenseScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketExpenseUpdateManyMutationInput;
}
