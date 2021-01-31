import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketExpenseArgs } from "./args/AggregateTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";
import { AggregateTicketExpense } from "../../outputs/AggregateTicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class AggregateTicketExpenseResolver {
  @TypeGraphQL.Query(_returns => AggregateTicketExpense, {
    nullable: false
  })
  async aggregateTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketExpenseArgs): Promise<AggregateTicketExpense> {
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

    return ctx.prisma.ticketExpense.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
