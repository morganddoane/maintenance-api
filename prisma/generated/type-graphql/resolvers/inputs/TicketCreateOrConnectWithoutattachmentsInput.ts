import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutAttachmentsInput } from "../inputs/TicketCreateWithoutAttachmentsInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateOrConnectWithoutattachmentsInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: TicketCreateWithoutAttachmentsInput;
}
