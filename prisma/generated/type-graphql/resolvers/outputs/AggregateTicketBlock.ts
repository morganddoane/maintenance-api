import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockAvgAggregate } from "../outputs/TicketBlockAvgAggregate";
import { TicketBlockCountAggregate } from "../outputs/TicketBlockCountAggregate";
import { TicketBlockMaxAggregate } from "../outputs/TicketBlockMaxAggregate";
import { TicketBlockMinAggregate } from "../outputs/TicketBlockMinAggregate";
import { TicketBlockSumAggregate } from "../outputs/TicketBlockSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTicketBlock {
  @TypeGraphQL.Field(_type => TicketBlockCountAggregate, {
    nullable: true
  })
  count!: TicketBlockCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketBlockAvgAggregate, {
    nullable: true
  })
  avg!: TicketBlockAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketBlockSumAggregate, {
    nullable: true
  })
  sum!: TicketBlockSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketBlockMinAggregate, {
    nullable: true
  })
  min!: TicketBlockMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketBlockMaxAggregate, {
    nullable: true
  })
  max!: TicketBlockMaxAggregate | null;
}
