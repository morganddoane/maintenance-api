import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentUpdateWithoutCreatedByInput } from "../inputs/AttachmentUpdateWithoutCreatedByInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: AttachmentUpdateWithoutCreatedByInput;
}
