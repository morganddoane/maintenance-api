import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutAttachmentInput } from "../inputs/UserCreateOrConnectWithoutAttachmentInput";
import { UserCreateWithoutAttachmentInput } from "../inputs/UserCreateWithoutAttachmentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOneWithoutAttachmentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAttachmentInput, {
    nullable: true
  })
  create?: UserCreateWithoutAttachmentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttachmentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAttachmentInput | undefined;
}
