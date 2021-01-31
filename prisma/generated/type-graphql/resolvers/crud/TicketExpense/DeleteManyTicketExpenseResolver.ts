import * as TypeGraphQL from "type-graphql";
import { DeleteManyTicketExpenseArgs } from "./args/DeleteManyTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class DeleteManyTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketExpenseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketExpense.deleteMany(args);
  }
}
