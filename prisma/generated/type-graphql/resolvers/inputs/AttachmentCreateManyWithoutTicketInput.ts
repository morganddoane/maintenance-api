import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateOrConnectWithoutTicketInput } from "../inputs/AttachmentCreateOrConnectWithoutTicketInput";
import { AttachmentCreateWithoutTicketInput } from "../inputs/AttachmentCreateWithoutTicketInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyWithoutTicketInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutTicketInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutTicketInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput[] | undefined;
}
