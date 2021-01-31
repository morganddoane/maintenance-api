import * as TypeGraphQL from "type-graphql";
import { FindManyTicketExpenseArgs } from "./args/FindManyTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class FindManyTicketExpenseResolver {
  @TypeGraphQL.Query(_returns => [TicketExpense], {
    nullable: false
  })
  async ticketExpenses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketExpenseArgs): Promise<TicketExpense[]> {
    return ctx.prisma.ticketExpense.findMany(args);
  }
}
