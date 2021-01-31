import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateManyWithoutResponseInput } from "../inputs/TicketUpdateManyWithoutResponseInput";
import { UserUpdateOneRequiredWithoutTicketResponseInput } from "../inputs/UserUpdateOneRequiredWithoutTicketResponseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  story?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTicketResponseInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneRequiredWithoutTicketResponseInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateManyWithoutResponseInput, {
    nullable: true
  })
  Ticket?: TicketUpdateManyWithoutResponseInput | undefined;
}
