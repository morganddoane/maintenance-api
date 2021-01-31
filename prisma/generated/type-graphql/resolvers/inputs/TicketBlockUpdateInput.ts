import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateManyWithoutTicketBlockInput } from "../inputs/TicketUpdateManyWithoutTicketBlockInput";
import { UserUpdateOneRequiredWithoutTicketBlockInput } from "../inputs/UserUpdateOneRequiredWithoutTicketBlockInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  story?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTicketBlockInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneRequiredWithoutTicketBlockInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateManyWithoutTicketBlockInput, {
    nullable: true
  })
  Ticket?: TicketUpdateManyWithoutTicketBlockInput | undefined;
}
