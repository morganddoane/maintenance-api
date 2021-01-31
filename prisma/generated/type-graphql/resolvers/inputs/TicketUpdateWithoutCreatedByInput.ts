import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentUpdateManyWithoutTicketInput } from "../inputs/AttachmentUpdateManyWithoutTicketInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTicketStateFieldUpdateOperationsInput } from "../inputs/EnumTicketStateFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketBlockUpdateOneWithoutTicketInput } from "../inputs/TicketBlockUpdateOneWithoutTicketInput";
import { TicketExpenseUpdateManyWithoutTicketInput } from "../inputs/TicketExpenseUpdateManyWithoutTicketInput";
import { TicketResponseUpdateOneWithoutTicketInput } from "../inputs/TicketResponseUpdateOneWithoutTicketInput";
import { TicketUpdateseenByInput } from "../inputs/TicketUpdateseenByInput";
import { TicketUpdatetagsInput } from "../inputs/TicketUpdatetagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  note?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  due?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTicketStateFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: EnumTicketStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateseenByInput, {
    nullable: true
  })
  seenBy?: TicketUpdateseenByInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdatetagsInput, {
    nullable: true
  })
  tags?: TicketUpdatetagsInput | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateManyWithoutTicketInput, {
    nullable: true
  })
  expenses?: TicketExpenseUpdateManyWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseUpdateOneWithoutTicketInput, {
    nullable: true
  })
  response?: TicketResponseUpdateOneWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyWithoutTicketInput, {
    nullable: true
  })
  attachments?: AttachmentUpdateManyWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockUpdateOneWithoutTicketInput, {
    nullable: true
  })
  TicketBlock?: TicketBlockUpdateOneWithoutTicketInput | undefined;
}
