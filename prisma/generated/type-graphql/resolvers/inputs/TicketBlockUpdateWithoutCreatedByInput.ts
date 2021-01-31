import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateManyWithoutTicketBlockInput } from "../inputs/TicketUpdateManyWithoutTicketBlockInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  story?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateManyWithoutTicketBlockInput, {
    nullable: true
  })
  Ticket?: TicketUpdateManyWithoutTicketBlockInput | undefined;
}
