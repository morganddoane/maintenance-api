import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AttachmentWhereInput } from "../../../inputs/AttachmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  where?: AttachmentWhereInput | undefined;
}
