import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AttachmentUpdateInput } from "../../../inputs/AttachmentUpdateInput";
import { AttachmentWhereUniqueInput } from "../../../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentUpdateInput, {
    nullable: false
  })
  data!: AttachmentUpdateInput;

  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;
}
