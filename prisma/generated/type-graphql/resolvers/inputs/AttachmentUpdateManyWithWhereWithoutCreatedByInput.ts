import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyMutationInput } from "../inputs/AttachmentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithWhereWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => AttachmentScalarWhereInput, {
    nullable: false
  })
  where!: AttachmentScalarWhereInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttachmentUpdateManyMutationInput;
}
