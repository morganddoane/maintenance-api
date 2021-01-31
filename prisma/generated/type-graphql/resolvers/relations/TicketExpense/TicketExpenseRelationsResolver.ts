import * as TypeGraphQL from "type-graphql";
import { Ticket } from "../../../models/Ticket";
import { TicketExpense } from "../../../models/TicketExpense";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class TicketExpenseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() ticketExpense: TicketExpense, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.ticketExpense.findUnique({
      where: {
        id: ticketExpense.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => Ticket, {
    nullable: true
  })
  async Ticket(@TypeGraphQL.Root() ticketExpense: TicketExpense, @TypeGraphQL.Ctx() ctx: any): Promise<Ticket | null> {
    return ctx.prisma.ticketExpense.findUnique({
      where: {
        id: ticketExpense.id,
      },
    }).Ticket({});
  }
}
