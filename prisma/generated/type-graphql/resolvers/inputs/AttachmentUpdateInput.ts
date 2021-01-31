import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateOneWithoutAttachmentsInput } from "../inputs/TicketUpdateOneWithoutAttachmentsInput";
import { UserUpdateOneRequiredWithoutAttachmentInput } from "../inputs/UserUpdateOneRequiredWithoutAttachmentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttachmentInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneRequiredWithoutAttachmentInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateOneWithoutAttachmentsInput, {
    nullable: true
  })
  Ticket?: TicketUpdateOneWithoutAttachmentsInput | undefined;
}
