import * as TypeGraphQL from "type-graphql";
import { UpdateTicketBlockArgs } from "./args/UpdateTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class UpdateTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: true
  })
  async updateTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.update(args);
  }
}
