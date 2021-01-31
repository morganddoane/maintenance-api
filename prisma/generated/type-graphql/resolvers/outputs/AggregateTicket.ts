import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketAvgAggregate } from "../outputs/TicketAvgAggregate";
import { TicketCountAggregate } from "../outputs/TicketCountAggregate";
import { TicketMaxAggregate } from "../outputs/TicketMaxAggregate";
import { TicketMinAggregate } from "../outputs/TicketMinAggregate";
import { TicketSumAggregate } from "../outputs/TicketSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTicket {
  @TypeGraphQL.Field(_type => TicketCountAggregate, {
    nullable: true
  })
  count!: TicketCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketAvgAggregate, {
    nullable: true
  })
  avg!: TicketAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketSumAggregate, {
    nullable: true
  })
  sum!: TicketSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketMinAggregate, {
    nullable: true
  })
  min!: TicketMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketMaxAggregate, {
    nullable: true
  })
  max!: TicketMaxAggregate | null;
}
