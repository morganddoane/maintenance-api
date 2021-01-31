import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttachmentArgs } from "./args/AggregateAttachmentArgs";
import { CreateAttachmentArgs } from "./args/CreateAttachmentArgs";
import { DeleteAttachmentArgs } from "./args/DeleteAttachmentArgs";
import { DeleteManyAttachmentArgs } from "./args/DeleteManyAttachmentArgs";
import { FindFirstAttachmentArgs } from "./args/FindFirstAttachmentArgs";
import { FindManyAttachmentArgs } from "./args/FindManyAttachmentArgs";
import { FindUniqueAttachmentArgs } from "./args/FindUniqueAttachmentArgs";
import { UpdateAttachmentArgs } from "./args/UpdateAttachmentArgs";
import { UpdateManyAttachmentArgs } from "./args/UpdateManyAttachmentArgs";
import { UpsertAttachmentArgs } from "./args/UpsertAttachmentArgs";
import { Attachment } from "../../../models/Attachment";
import { AggregateAttachment } from "../../outputs/AggregateAttachment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Attachment)
export class AttachmentCrudResolver {
  @TypeGraphQL.Query(_returns => Attachment, {
    nullable: true
  })
  async attachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Attachment, {
    nullable: true
  })
  async findFirstAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Attachment], {
    nullable: false
  })
  async attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAttachmentArgs): Promise<Attachment[]> {
    return ctx.prisma.attachment.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: false
  })
  async createAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAttachmentArgs): Promise<Attachment> {
    return ctx.prisma.attachment.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: true
  })
  async deleteAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: true
  })
  async updateAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAttachmentArgs): Promise<BatchPayload> {
    return ctx.prisma.attachment.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAttachmentArgs): Promise<BatchPayload> {
    return ctx.prisma.attachment.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: false
  })
  async upsertAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAttachmentArgs): Promise<Attachment> {
    return ctx.prisma.attachment.upsert(args);
  }

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
