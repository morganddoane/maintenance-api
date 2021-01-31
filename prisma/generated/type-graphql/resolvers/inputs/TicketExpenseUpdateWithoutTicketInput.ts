import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTicketExpenseInput } from "../inputs/UserUpdateOneRequiredWithoutTicketExpenseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpdateWithoutTicketInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  dollars?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTicketExpenseInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneRequiredWithoutTicketExpenseInput | undefined;
}
