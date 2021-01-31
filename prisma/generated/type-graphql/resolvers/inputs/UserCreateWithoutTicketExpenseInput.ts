import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentCreateManyWithoutCreatedByInput } from "../inputs/AttachmentCreateManyWithoutCreatedByInput";
import { TicketBlockCreateManyWithoutCreatedByInput } from "../inputs/TicketBlockCreateManyWithoutCreatedByInput";
import { TicketCreateManyWithoutCreatedByInput } from "../inputs/TicketCreateManyWithoutCreatedByInput";
import { TicketResponseCreateManyWithoutCreatedByInput } from "../inputs/TicketResponseCreateManyWithoutCreatedByInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutTicketExpenseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "Admin" | "Manager" | "User";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => TicketCreateManyWithoutCreatedByInput, {
    nullable: true
  })
  Ticket?: TicketCreateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseCreateManyWithoutCreatedByInput, {
    nullable: true
  })
  TicketResponse?: TicketResponseCreateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyWithoutCreatedByInput, {
    nullable: true
  })
  Attachment?: AttachmentCreateManyWithoutCreatedByInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockCreateManyWithoutCreatedByInput, {
    nullable: true
  })
  TicketBlock?: TicketBlockCreateManyWithoutCreatedByInput | undefined;
}
