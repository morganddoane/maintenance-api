import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Ticket } from "../../../models/Ticket";
import { TicketBlock } from "../../../models/TicketBlock";
import { TicketExpense } from "../../../models/TicketExpense";
import { TicketResponse } from "../../../models/TicketResponse";
import { User } from "../../../models/User";
import { TicketAttachmentsArgs } from "./args/TicketAttachmentsArgs";
import { TicketExpensesArgs } from "./args/TicketExpensesArgs";

@TypeGraphQL.Resolver(_of => Ticket)
export class TicketRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.ticket.findUnique({
      where: {
        id: ticket.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => [TicketExpense], {
    nullable: true
  })
  async expenses(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TicketExpensesArgs): Promise<TicketExpense[] | null> {
    return ctx.prisma.ticket.findUnique({
      where: {
        id: ticket.id,
      },
    }).expenses(args);
  }

  @TypeGraphQL.FieldResolver(_type => TicketResponse, {
    nullable: true
  })
  async response(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any): Promise<TicketResponse | null> {
    return ctx.prisma.ticket.findUnique({
      where: {
        id: ticket.id,
      },
    }).response({});
  }

  @TypeGraphQL.FieldResolver(_type => [Attachment], {
    nullable: true
  })
  async attachments(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TicketAttachmentsArgs): Promise<Attachment[] | null> {
    return ctx.prisma.ticket.findUnique({
      where: {
        id: ticket.id,
      },
    }).attachments(args);
  }

  @TypeGraphQL.FieldResolver(_type => TicketBlock, {
    nullable: true
  })
  async TicketBlock(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any): Promise<TicketBlock | null> {
    return ctx.prisma.ticket.findUnique({
      where: {
        id: ticket.id,
      },
    }).TicketBlock({});
  }
}
