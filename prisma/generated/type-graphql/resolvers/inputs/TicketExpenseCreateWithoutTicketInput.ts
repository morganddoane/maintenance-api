import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOneWithoutTicketExpenseInput } from "../inputs/UserCreateOneWithoutTicketExpenseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseCreateWithoutTicketInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  dollars!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutTicketExpenseInput, {
    nullable: false
  })
  createdBy!: UserCreateOneWithoutTicketExpenseInput;
}
