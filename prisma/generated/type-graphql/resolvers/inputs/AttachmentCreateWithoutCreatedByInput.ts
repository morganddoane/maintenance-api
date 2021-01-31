import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOneWithoutAttachmentsInput } from "../inputs/TicketCreateOneWithoutAttachmentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => TicketCreateOneWithoutAttachmentsInput, {
    nullable: true
  })
  Ticket?: TicketCreateOneWithoutAttachmentsInput | undefined;
}
