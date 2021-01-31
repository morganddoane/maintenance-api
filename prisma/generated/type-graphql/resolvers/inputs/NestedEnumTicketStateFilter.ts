import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketState } from "../../enums/TicketState";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumTicketStateFilter {
  @TypeGraphQL.Field(_type => TicketState, {
    nullable: true
  })
  equals?: "Pending" | "Open" | "Blocked" | "Compelete" | "Deleted" | undefined;

  @TypeGraphQL.Field(_type => [TicketState], {
    nullable: true
  })
  in?: Array<"Pending" | "Open" | "Blocked" | "Compelete" | "Deleted"> | undefined;

  @TypeGraphQL.Field(_type => [TicketState], {
    nullable: true
  })
  notIn?: Array<"Pending" | "Open" | "Blocked" | "Compelete" | "Deleted"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTicketStateFilter, {
    nullable: true
  })
  not?: NestedEnumTicketStateFilter | undefined;
}
