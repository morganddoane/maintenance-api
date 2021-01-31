import * as TypeGraphQL from "type-graphql";
import { UpdateManyTicketArgs } from "./args/UpdateManyTicketArgs";
import { Ticket } from "../../../models/Ticket";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ticket)
export class UpdateManyTicketResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketArgs): Promise<BatchPayload> {
    return ctx.prisma.ticket.updateMany(args);
  }
}
