import * as TypeGraphQL from "type-graphql";
import { DeleteTicketExpenseArgs } from "./args/DeleteTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class DeleteTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: true
  })
  async deleteTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.delete(args);
  }
}
