import * as TypeGraphQL from "type-graphql";
import { FindFirstTicketBlockArgs } from "./args/FindFirstTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class FindFirstTicketBlockResolver {
  @TypeGraphQL.Query(_returns => TicketBlock, {
    nullable: true
  })
  async findFirstTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.findFirst(args);
  }
}
