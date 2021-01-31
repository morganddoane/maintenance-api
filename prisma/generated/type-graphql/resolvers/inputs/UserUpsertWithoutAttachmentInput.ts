import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutAttachmentInput } from "../inputs/UserCreateWithoutAttachmentInput";
import { UserUpdateWithoutAttachmentInput } from "../inputs/UserUpdateWithoutAttachmentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutAttachmentInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAttachmentInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAttachmentInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAttachmentInput, {
    nullable: false
  })
  create!: UserCreateWithoutAttachmentInput;
}
