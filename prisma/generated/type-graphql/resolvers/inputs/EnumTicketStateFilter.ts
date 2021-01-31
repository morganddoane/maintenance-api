import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedEnumTicketStateFilter } from "../inputs/NestedEnumTicketStateFilter";
import { TicketState } from "../../enums/TicketState";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTicketStateFilter {
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
