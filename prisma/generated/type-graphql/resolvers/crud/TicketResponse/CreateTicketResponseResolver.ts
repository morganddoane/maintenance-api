import * as TypeGraphQL from "type-graphql";
import { CreateTicketResponseArgs } from "./args/CreateTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class CreateTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: false
  })
  async createTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketResponseArgs): Promise<TicketResponse> {
    return ctx.prisma.ticketResponse.create(args);
  }
}
