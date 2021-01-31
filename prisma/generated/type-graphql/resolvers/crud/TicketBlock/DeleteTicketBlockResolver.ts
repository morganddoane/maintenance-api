import * as TypeGraphQL from "type-graphql";
import { DeleteTicketBlockArgs } from "./args/DeleteTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class DeleteTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: true
  })
  async deleteTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.delete(args);
  }
}
