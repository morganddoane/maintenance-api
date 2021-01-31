import * as TypeGraphQL from "type-graphql";
import { FindFirstTicketExpenseArgs } from "./args/FindFirstTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class FindFirstTicketExpenseResolver {
  @TypeGraphQL.Query(_returns => TicketExpense, {
    nullable: true
  })
  async findFirstTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.findFirst(args);
  }
}
