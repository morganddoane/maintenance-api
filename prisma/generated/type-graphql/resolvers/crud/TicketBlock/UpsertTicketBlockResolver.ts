import * as TypeGraphQL from "type-graphql";
import { UpsertTicketBlockArgs } from "./args/UpsertTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class UpsertTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: false
  })
  async upsertTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketBlockArgs): Promise<TicketBlock> {
    return ctx.prisma.ticketBlock.upsert(args);
  }
}
