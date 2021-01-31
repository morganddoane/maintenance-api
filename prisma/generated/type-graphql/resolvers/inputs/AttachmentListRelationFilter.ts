import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentWhereInput } from "../inputs/AttachmentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentListRelationFilter {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  every?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  some?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  none?: AttachmentWhereInput | undefined;
}
