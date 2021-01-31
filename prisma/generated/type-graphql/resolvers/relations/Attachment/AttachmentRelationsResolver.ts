import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Ticket } from "../../../models/Ticket";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Attachment)
export class AttachmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() attachment: Attachment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.attachment.findUnique({
      where: {
        id: attachment.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => Ticket, {
    nullable: true
  })
  async Ticket(@TypeGraphQL.Root() attachment: Attachment, @TypeGraphQL.Ctx() ctx: any): Promise<Ticket | null> {
    return ctx.prisma.attachment.findUnique({
      where: {
        id: attachment.id,
      },
    }).Ticket({});
  }
}
