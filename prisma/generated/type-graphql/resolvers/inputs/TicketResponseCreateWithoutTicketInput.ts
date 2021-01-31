import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOneWithoutTicketResponseInput } from "../inputs/UserCreateOneWithoutTicketResponseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseCreateWithoutTicketInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  story!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutTicketResponseInput, {
    nullable: false
  })
  createdBy!: UserCreateOneWithoutTicketResponseInput;
}
