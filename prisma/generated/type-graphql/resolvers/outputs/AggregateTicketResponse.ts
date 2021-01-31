import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseAvgAggregate } from "../outputs/TicketResponseAvgAggregate";
import { TicketResponseCountAggregate } from "../outputs/TicketResponseCountAggregate";
import { TicketResponseMaxAggregate } from "../outputs/TicketResponseMaxAggregate";
import { TicketResponseMinAggregate } from "../outputs/TicketResponseMinAggregate";
import { TicketResponseSumAggregate } from "../outputs/TicketResponseSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTicketResponse {
  @TypeGraphQL.Field(_type => TicketResponseCountAggregate, {
    nullable: true
  })
  count!: TicketResponseCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketResponseAvgAggregate, {
    nullable: true
  })
  avg!: TicketResponseAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketResponseSumAggregate, {
    nullable: true
  })
  sum!: TicketResponseSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketResponseMinAggregate, {
    nullable: true
  })
  min!: TicketResponseMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketResponseMaxAggregate, {
    nullable: true
  })
  max!: TicketResponseMaxAggregate | null;
}
