import * as TypeGraphQL from "type-graphql";
import { DeleteManyTicketArgs } from "./args/DeleteManyTicketArgs";
import { Ticket } from "../../../models/Ticket";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ticket)
export class DeleteManyTicketResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketArgs): Promise<BatchPayload> {
    return ctx.prisma.ticket.deleteMany(args);
  }
}
