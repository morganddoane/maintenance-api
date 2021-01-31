import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AttachmentWhereUniqueInput } from "../../../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;
}
