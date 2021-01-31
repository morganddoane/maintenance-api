import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutAttachmentInput } from "../inputs/UserCreateOrConnectWithoutAttachmentInput";
import { UserCreateWithoutAttachmentInput } from "../inputs/UserCreateWithoutAttachmentInput";
import { UserUpdateWithoutAttachmentInput } from "../inputs/UserUpdateWithoutAttachmentInput";
import { UserUpsertWithoutAttachmentInput } from "../inputs/UserUpsertWithoutAttachmentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAttachmentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAttachmentInput, {
    nullable: true
  })
  create?: UserCreateWithoutAttachmentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAttachmentInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAttachmentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAttachmentInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAttachmentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttachmentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAttachmentInput | undefined;
}
