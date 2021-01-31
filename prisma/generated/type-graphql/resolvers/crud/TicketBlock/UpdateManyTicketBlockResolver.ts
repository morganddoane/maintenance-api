import * as TypeGraphQL from "type-graphql";
import { UpdateManyTicketBlockArgs } from "./args/UpdateManyTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class UpdateManyTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketBlockArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketBlock.updateMany(args);
  }
}
