import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateManyWithoutTicketInput } from "../inputs/AttachmentCreateManyWithoutTicketInput";
import { TicketBlockCreateOneWithoutTicketInput } from "../inputs/TicketBlockCreateOneWithoutTicketInput";
import { TicketCreateseenByInput } from "../inputs/TicketCreateseenByInput";
import { TicketCreatetagsInput } from "../inputs/TicketCreatetagsInput";
import { TicketExpenseCreateManyWithoutTicketInput } from "../inputs/TicketExpenseCreateManyWithoutTicketInput";
import { TicketResponseCreateOneWithoutTicketInput } from "../inputs/TicketResponseCreateOneWithoutTicketInput";
import { TicketState } from "../../enums/TicketState";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  note!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due?: Date | undefined;

  @TypeGraphQL.Field(_type => TicketState, {
    nullable: false
  })
  state!: "Pending" | "Open" | "Blocked" | "Compelete" | "Deleted";

  @TypeGraphQL.Field(_type => TicketCreateseenByInput, {
    nullable: true
  })
  seenBy?: TicketCreateseenByInput | undefined;

  @TypeGraphQL.Field(_type => TicketCreatetagsInput, {
    nullable: true
  })
  tags?: TicketCreatetagsInput | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseCreateManyWithoutTicketInput, {
    nullable: true
  })
  expenses?: TicketExpenseCreateManyWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseCreateOneWithoutTicketInput, {
    nullable: true
  })
  response?: TicketResponseCreateOneWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyWithoutTicketInput, {
    nullable: true
  })
  attachments?: AttachmentCreateManyWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockCreateOneWithoutTicketInput, {
    nullable: true
  })
  TicketBlock?: TicketBlockCreateOneWithoutTicketInput | undefined;
}
