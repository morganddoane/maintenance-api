import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketBlockArgs } from "./args/AggregateTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";
import { AggregateTicketBlock } from "../../outputs/AggregateTicketBlock";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class AggregateTicketBlockResolver {
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
