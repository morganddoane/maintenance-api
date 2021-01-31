import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttachmentArgs } from "./args/AggregateAttachmentArgs";
import { Attachment } from "../../../models/Attachment";
import { AggregateAttachment } from "../../outputs/AggregateAttachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class AggregateAttachmentResolver {
  @TypeGraphQL.Query(_returns => AggregateAttachment, {
    nullable: false
  })
  async aggregateAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttachmentArgs): Promise<AggregateAttachment> {
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

    return ctx.prisma.attachment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
