import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Ticket } from "../../../models/Ticket";
import { TicketBlock } from "../../../models/TicketBlock";
import { TicketExpense } from "../../../models/TicketExpense";
import { TicketResponse } from "../../../models/TicketResponse";
import { User } from "../../../models/User";
import { UserAttachmentArgs } from "./args/UserAttachmentArgs";
import { UserTicketArgs } from "./args/UserTicketArgs";
import { UserTicketBlockArgs } from "./args/UserTicketBlockArgs";
import { UserTicketExpenseArgs } from "./args/UserTicketExpenseArgs";
import { UserTicketResponseArgs } from "./args/UserTicketResponseArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Ticket], {
    nullable: true
  })
  async Ticket(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTicketArgs): Promise<Ticket[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).Ticket(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TicketExpense], {
    nullable: true
  })
  async TicketExpense(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTicketExpenseArgs): Promise<TicketExpense[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).TicketExpense(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TicketResponse], {
    nullable: true
  })
  async TicketResponse(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTicketResponseArgs): Promise<TicketResponse[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).TicketResponse(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Attachment], {
    nullable: true
  })
  async Attachment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAttachmentArgs): Promise<Attachment[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).Attachment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TicketBlock], {
    nullable: true
  })
  async TicketBlock(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTicketBlockArgs): Promise<TicketBlock[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).TicketBlock(args);
  }
}
