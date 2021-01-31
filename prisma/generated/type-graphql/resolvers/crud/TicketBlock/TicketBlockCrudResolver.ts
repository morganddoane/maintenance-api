import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketBlockArgs } from "./args/AggregateTicketBlockArgs";
import { CreateTicketBlockArgs } from "./args/CreateTicketBlockArgs";
import { DeleteManyTicketBlockArgs } from "./args/DeleteManyTicketBlockArgs";
import { DeleteTicketBlockArgs } from "./args/DeleteTicketBlockArgs";
import { FindFirstTicketBlockArgs } from "./args/FindFirstTicketBlockArgs";
import { FindManyTicketBlockArgs } from "./args/FindManyTicketBlockArgs";
import { FindUniqueTicketBlockArgs } from "./args/FindUniqueTicketBlockArgs";
import { UpdateManyTicketBlockArgs } from "./args/UpdateManyTicketBlockArgs";
import { UpdateTicketBlockArgs } from "./args/UpdateTicketBlockArgs";
import { UpsertTicketBlockArgs } from "./args/UpsertTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";
import { AggregateTicketBlock } from "../../outputs/AggregateTicketBlock";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class TicketBlockCrudResolver {
  @TypeGraphQL.Query(_returns => TicketBlock, {
    nullable: true
  })
  async ticketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TicketBlock, {
    nullable: true
  })
  async findFirstTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TicketBlock], {
    nullable: false
  })
  async ticketBlocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketBlockArgs): Promise<TicketBlock[]> {
    return ctx.prisma.ticketBlock.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: false
  })
  async createTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketBlockArgs): Promise<TicketBlock> {
    return ctx.prisma.ticketBlock.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: true
  })
  async deleteTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: true
  })
  async updateTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketBlockArgs): Promise<TicketBlock | null> {
    return ctx.prisma.ticketBlock.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketBlockArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketBlock.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketBlockArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketBlock.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketBlock, {
    nullable: false
  })
  async upsertTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketBlockArgs): Promise<TicketBlock> {
    return ctx.prisma.ticketBlock.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTicketBlock, {
    nullable: false
  })
  async aggregateTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketBlockArgs): Promise<AggregateTicketBlock> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.ticketBlock.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
