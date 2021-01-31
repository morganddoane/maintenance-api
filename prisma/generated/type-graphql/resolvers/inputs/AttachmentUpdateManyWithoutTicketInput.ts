import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateOrConnectWithoutTicketInput } from "../inputs/AttachmentCreateOrConnectWithoutTicketInput";
import { AttachmentCreateWithoutTicketInput } from "../inputs/AttachmentCreateWithoutTicketInput";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyWithWhereWithoutTicketInput } from "../inputs/AttachmentUpdateManyWithWhereWithoutTicketInput";
import { AttachmentUpdateWithWhereUniqueWithoutTicketInput } from "../inputs/AttachmentUpdateWithWhereUniqueWithoutTicketInput";
import { AttachmentUpsertWithWhereUniqueWithoutTicketInput } from "../inputs/AttachmentUpsertWithWhereUniqueWithoutTicketInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithoutTicketInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutTicketInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutTicketInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [AttachmentUpdateWithWhereUniqueWithoutTicketInput], {
    nullable: true
  })
  update?: AttachmentUpdateWithWhereUniqueWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateManyWithWhereWithoutTicketInput], {
    nullable: true
  })
  updateMany?: AttachmentUpdateManyWithWhereWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpsertWithWhereUniqueWithoutTicketInput], {
    nullable: true
  })
  upsert?: AttachmentUpsertWithWhereUniqueWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutTicketInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutTicketInput[] | undefined;
}
