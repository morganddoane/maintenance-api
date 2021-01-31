import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTicketStateFieldUpdateOperationsInput } from "../inputs/EnumTicketStateFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateseenByInput } from "../inputs/TicketUpdateseenByInput";
import { TicketUpdatetagsInput } from "../inputs/TicketUpdatetagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateManyMutationInput {
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
}
