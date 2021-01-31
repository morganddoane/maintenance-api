import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseAvgAggregate } from "../outputs/TicketExpenseAvgAggregate";
import { TicketExpenseCountAggregate } from "../outputs/TicketExpenseCountAggregate";
import { TicketExpenseMaxAggregate } from "../outputs/TicketExpenseMaxAggregate";
import { TicketExpenseMinAggregate } from "../outputs/TicketExpenseMinAggregate";
import { TicketExpenseSumAggregate } from "../outputs/TicketExpenseSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTicketExpense {
  @TypeGraphQL.Field(_type => TicketExpenseCountAggregate, {
    nullable: true
  })
  count!: TicketExpenseCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketExpenseAvgAggregate, {
    nullable: true
  })
  avg!: TicketExpenseAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketExpenseSumAggregate, {
    nullable: true
  })
  sum!: TicketExpenseSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketExpenseMinAggregate, {
    nullable: true
  })
  min!: TicketExpenseMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketExpenseMaxAggregate, {
    nullable: true
  })
  max!: TicketExpenseMaxAggregate | null;
}
