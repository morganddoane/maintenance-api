import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutAttachmentsInput } from "../inputs/TicketCreateWithoutAttachmentsInput";
import { TicketUpdateWithoutAttachmentsInput } from "../inputs/TicketUpdateWithoutAttachmentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpsertWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => TicketUpdateWithoutAttachmentsInput, {
    nullable: false
  })
  update!: TicketUpdateWithoutAttachmentsInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: TicketCreateWithoutAttachmentsInput;
}
