import * as TypeGraphQL from "type-graphql";
import { UpdateTicketExpenseArgs } from "./args/UpdateTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class UpdateTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: true
  })
  async updateTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.update(args);
  }
}
