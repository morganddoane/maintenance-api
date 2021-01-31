import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AttachmentCreateInput } from "../../../inputs/AttachmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentCreateInput, {
    nullable: false
  })
  data!: AttachmentCreateInput;
}
