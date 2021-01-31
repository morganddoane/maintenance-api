import * as TypeGraphQL from "type-graphql";
import { FindUniqueTicketBlockArgs } from "./args/FindUniqueTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class FindUniqueTicketBlockResolver {
  @TypeGraphQL.Query(_returns => TicketBlock, {
    nullable: true
  })
  async ticketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.findUnique(args);
  }
}
