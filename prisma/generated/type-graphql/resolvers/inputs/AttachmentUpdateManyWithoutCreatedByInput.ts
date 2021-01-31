import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateOrConnectWithoutcreatedByInput } from "../inputs/AttachmentCreateOrConnectWithoutcreatedByInput";
import { AttachmentCreateWithoutCreatedByInput } from "../inputs/AttachmentCreateWithoutCreatedByInput";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/AttachmentUpdateManyWithWhereWithoutCreatedByInput";
import { AttachmentUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/AttachmentUpdateWithWhereUniqueWithoutCreatedByInput";
import { AttachmentUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/AttachmentUpsertWithWhereUniqueWithoutCreatedByInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  set?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: AttachmentUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: AttachmentUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: AttachmentUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutcreatedByInput[] | undefined;
}
