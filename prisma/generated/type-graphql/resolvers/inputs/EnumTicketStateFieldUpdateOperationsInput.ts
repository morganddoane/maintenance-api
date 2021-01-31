import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketState } from "../../enums/TicketState";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTicketStateFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TicketState, {
    nullable: true
  })
  set?: "Pending" | "Open" | "Blocked" | "Compelete" | "Deleted" | undefined;
}
