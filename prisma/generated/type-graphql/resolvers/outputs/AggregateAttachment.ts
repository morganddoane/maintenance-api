import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentAvgAggregate } from "../outputs/AttachmentAvgAggregate";
import { AttachmentCountAggregate } from "../outputs/AttachmentCountAggregate";
import { AttachmentMaxAggregate } from "../outputs/AttachmentMaxAggregate";
import { AttachmentMinAggregate } from "../outputs/AttachmentMinAggregate";
import { AttachmentSumAggregate } from "../outputs/AttachmentSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAttachment {
  @TypeGraphQL.Field(_type => AttachmentCountAggregate, {
    nullable: true
  })
  count!: AttachmentCountAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentAvgAggregate, {
    nullable: true
  })
  avg!: AttachmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentSumAggregate, {
    nullable: true
  })
  sum!: AttachmentSumAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentMinAggregate, {
    nullable: true
  })
  min!: AttachmentMinAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentMaxAggregate, {
    nullable: true
  })
  max!: AttachmentMaxAggregate | null;
}
