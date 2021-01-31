import * as TypeGraphQL from "type-graphql";
import { FindManyTicketBlockArgs } from "./args/FindManyTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class FindManyTicketBlockResolver {
  @TypeGraphQL.Query(_returns => [TicketBlock], {
    nullable: false
  })
  async ticketBlocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketBlockArgs): Promise<TicketBlock[]> {
    return ctx.prisma.ticketBlock.findMany(args);
  }
}
