import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketResponseArgs } from "./args/AggregateTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";
import { AggregateTicketResponse } from "../../outputs/AggregateTicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class AggregateTicketResponseResolver {
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
