import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentUpdateManyWithoutCreatedByInput } from "../inputs/AttachmentUpdateManyWithoutCreatedByInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketBlockUpdateManyWithoutCreatedByInput } from "../inputs/TicketBlockUpdateManyWithoutCreatedByInput";
import { TicketExpenseUpdateManyWithoutCreatedByInput } from "../inputs/TicketExpenseUpdateManyWithoutCreatedByInput";
import { TicketResponseUpdateManyWithoutCreatedByInput } from "../inputs/TicketResponseUpdateManyWithoutCreatedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutTicketInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  TicketExpense?: TicketExpenseUpdateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  TicketResponse?: TicketResponseUpdateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  Attachment?: AttachmentUpdateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockUpdateManyWithoutCreatedByInput, {
    nullable: true
  })
  TicketBlock?: TicketBlockUpdateManyWithoutCreatedByInput | undefined;
}
