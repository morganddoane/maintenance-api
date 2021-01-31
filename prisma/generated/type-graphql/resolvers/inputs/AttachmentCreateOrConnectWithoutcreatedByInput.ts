import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateWithoutCreatedByInput } from "../inputs/AttachmentCreateWithoutCreatedByInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateOrConnectWithoutcreatedByInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: AttachmentCreateWithoutCreatedByInput;
}
