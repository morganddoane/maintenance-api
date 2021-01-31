import * as TypeGraphQL from "type-graphql";
import { Ticket } from "../../../models/Ticket";
import { TicketBlock } from "../../../models/TicketBlock";
import { User } from "../../../models/User";
import { TicketBlockTicketArgs } from "./args/TicketBlockTicketArgs";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class TicketBlockRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() ticketBlock: TicketBlock, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.ticketBlock.findUnique({
      where: {
        id: ticketBlock.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => [Ticket], {
    nullable: true
  })
  async Ticket(@TypeGraphQL.Root() ticketBlock: TicketBlock, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TicketBlockTicketArgs): Promise<Ticket[] | null> {
    return ctx.prisma.ticketBlock.findUnique({
      where: {
        id: ticketBlock.id,
      },
    }).Ticket(args);
  }
}
