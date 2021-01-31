import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateOrConnectWithoutcreatedByInput } from "../inputs/AttachmentCreateOrConnectWithoutcreatedByInput";
import { AttachmentCreateWithoutCreatedByInput } from "../inputs/AttachmentCreateWithoutCreatedByInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutcreatedByInput[] | undefined;
}
