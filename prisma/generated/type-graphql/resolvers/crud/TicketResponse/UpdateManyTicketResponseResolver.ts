import * as TypeGraphQL from "type-graphql";
import { UpdateManyTicketResponseArgs } from "./args/UpdateManyTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class UpdateManyTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketResponseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketResponse.updateMany(args);
  }
}
