import * as TypeGraphQL from "type-graphql";
import { DeleteTicketResponseArgs } from "./args/DeleteTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class DeleteTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: true
  })
  async deleteTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.delete(args);
  }
}
