import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateWithoutTicketInput } from "../inputs/AttachmentCreateWithoutTicketInput";
import { AttachmentUpdateWithoutTicketInput } from "../inputs/AttachmentUpdateWithoutTicketInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpsertWithWhereUniqueWithoutTicketInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateWithoutTicketInput, {
    nullable: false
  })
  update!: AttachmentUpdateWithoutTicketInput;

  @TypeGraphQL.Field(_type => AttachmentCreateWithoutTicketInput, {
    nullable: false
  })
  create!: AttachmentCreateWithoutTicketInput;
}
