import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketArgs } from "./args/AggregateTicketArgs";
import { Ticket } from "../../../models/Ticket";
import { AggregateTicket } from "../../outputs/AggregateTicket";

@TypeGraphQL.Resolver(_of => Ticket)
export class AggregateTicketResolver {
  @TypeGraphQL.Query(_returns => AggregateTicket, {
    nullable: false
  })
  async aggregateTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketArgs): Promise<AggregateTicket> {
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

    return ctx.prisma.ticket.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
