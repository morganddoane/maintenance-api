import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketResponseArgs } from "./args/AggregateTicketResponseArgs";
import { CreateTicketResponseArgs } from "./args/CreateTicketResponseArgs";
import { DeleteManyTicketResponseArgs } from "./args/DeleteManyTicketResponseArgs";
import { DeleteTicketResponseArgs } from "./args/DeleteTicketResponseArgs";
import { FindFirstTicketResponseArgs } from "./args/FindFirstTicketResponseArgs";
import { FindManyTicketResponseArgs } from "./args/FindManyTicketResponseArgs";
import { FindUniqueTicketResponseArgs } from "./args/FindUniqueTicketResponseArgs";
import { UpdateManyTicketResponseArgs } from "./args/UpdateManyTicketResponseArgs";
import { UpdateTicketResponseArgs } from "./args/UpdateTicketResponseArgs";
import { UpsertTicketResponseArgs } from "./args/UpsertTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";
import { AggregateTicketResponse } from "../../outputs/AggregateTicketResponse";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class TicketResponseCrudResolver {
  @TypeGraphQL.Query(_returns => TicketResponse, {
    nullable: true
  })
  async ticketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TicketResponse, {
    nullable: true
  })
  async findFirstTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TicketResponse], {
    nullable: false
  })
  async ticketResponses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketResponseArgs): Promise<TicketResponse[]> {
    return ctx.prisma.ticketResponse.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: false
  })
  async createTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketResponseArgs): Promise<TicketResponse> {
    return ctx.prisma.ticketResponse.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: true
  })
  async deleteTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: true
  })
  async updateTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketResponseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketResponse.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketResponseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketResponse.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: false
  })
  async upsertTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketResponseArgs): Promise<TicketResponse> {
    return ctx.prisma.ticketResponse.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTicketResponse, {
    nullable: false
  })
  async aggregateTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketResponseArgs): Promise<AggregateTicketResponse> {
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

    return ctx.prisma.ticketResponse.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
