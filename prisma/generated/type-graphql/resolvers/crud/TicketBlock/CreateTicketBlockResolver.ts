import * as TypeGraphQL from "type-graphql";
import { CreateTicketBlockArgs } from "./args/CreateTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class CreateTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: false
  })
  async createTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketBlockArgs): Promise<TicketBlock> {
    return ctx.prisma.ticketBlock.create(args);
  }
}
