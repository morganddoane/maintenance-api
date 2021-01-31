import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Ticket: crudResolvers.TicketCrudResolver,
  TicketResponse: crudResolvers.TicketResponseCrudResolver,
  TicketBlock: crudResolvers.TicketBlockCrudResolver,
  TicketExpense: crudResolvers.TicketExpenseCrudResolver,
  Attachment: crudResolvers.AttachmentCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver
  },
  Ticket: {
    ticket: actionResolvers.FindUniqueTicketResolver,
    findFirstTicket: actionResolvers.FindFirstTicketResolver,
    tickets: actionResolvers.FindManyTicketResolver,
    createTicket: actionResolvers.CreateTicketResolver,
    deleteTicket: actionResolvers.DeleteTicketResolver,
    updateTicket: actionResolvers.UpdateTicketResolver,
    deleteManyTicket: actionResolvers.DeleteManyTicketResolver,
    updateManyTicket: actionResolvers.UpdateManyTicketResolver,
    upsertTicket: actionResolvers.UpsertTicketResolver,
    aggregateTicket: actionResolvers.AggregateTicketResolver
  },
  TicketResponse: {
    ticketResponse: actionResolvers.FindUniqueTicketResponseResolver,
    findFirstTicketResponse: actionResolvers.FindFirstTicketResponseResolver,
    ticketResponses: actionResolvers.FindManyTicketResponseResolver,
    createTicketResponse: actionResolvers.CreateTicketResponseResolver,
    deleteTicketResponse: actionResolvers.DeleteTicketResponseResolver,
    updateTicketResponse: actionResolvers.UpdateTicketResponseResolver,
    deleteManyTicketResponse: actionResolvers.DeleteManyTicketResponseResolver,
    updateManyTicketResponse: actionResolvers.UpdateManyTicketResponseResolver,
    upsertTicketResponse: actionResolvers.UpsertTicketResponseResolver,
    aggregateTicketResponse: actionResolvers.AggregateTicketResponseResolver
  },
  TicketBlock: {
    ticketBlock: actionResolvers.FindUniqueTicketBlockResolver,
    findFirstTicketBlock: actionResolvers.FindFirstTicketBlockResolver,
    ticketBlocks: actionResolvers.FindManyTicketBlockResolver,
    createTicketBlock: actionResolvers.CreateTicketBlockResolver,
    deleteTicketBlock: actionResolvers.DeleteTicketBlockResolver,
    updateTicketBlock: actionResolvers.UpdateTicketBlockResolver,
    deleteManyTicketBlock: actionResolvers.DeleteManyTicketBlockResolver,
    updateManyTicketBlock: actionResolvers.UpdateManyTicketBlockResolver,
    upsertTicketBlock: actionResolvers.UpsertTicketBlockResolver,
    aggregateTicketBlock: actionResolvers.AggregateTicketBlockResolver
  },
  TicketExpense: {
    ticketExpense: actionResolvers.FindUniqueTicketExpenseResolver,
    findFirstTicketExpense: actionResolvers.FindFirstTicketExpenseResolver,
    ticketExpenses: actionResolvers.FindManyTicketExpenseResolver,
    createTicketExpense: actionResolvers.CreateTicketExpenseResolver,
    deleteTicketExpense: actionResolvers.DeleteTicketExpenseResolver,
    updateTicketExpense: actionResolvers.UpdateTicketExpenseResolver,
    deleteManyTicketExpense: actionResolvers.DeleteManyTicketExpenseResolver,
    updateManyTicketExpense: actionResolvers.UpdateManyTicketExpenseResolver,
    upsertTicketExpense: actionResolvers.UpsertTicketExpenseResolver,
    aggregateTicketExpense: actionResolvers.AggregateTicketExpenseResolver
  },
  Attachment: {
    attachment: actionResolvers.FindUniqueAttachmentResolver,
    findFirstAttachment: actionResolvers.FindFirstAttachmentResolver,
    attachments: actionResolvers.FindManyAttachmentResolver,
    createAttachment: actionResolvers.CreateAttachmentResolver,
    deleteAttachment: actionResolvers.DeleteAttachmentResolver,
    updateAttachment: actionResolvers.UpdateAttachmentResolver,
    deleteManyAttachment: actionResolvers.DeleteManyAttachmentResolver,
    updateManyAttachment: actionResolvers.UpdateManyAttachmentResolver,
    upsertAttachment: actionResolvers.UpsertAttachmentResolver,
    aggregateAttachment: actionResolvers.AggregateAttachmentResolver
  }
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
      const decorators = resolverActionsConfig[
        modelResolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const crudTarget = crudResolversMap[modelName].prototype;
      const actionResolversConfig = actionResolversMap[modelName];
      const actionTarget = (actionResolversConfig[
        modelResolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
        );
        decorator(
          actionTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[]>
>;

export function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
      const decorators = enhanceConfig.fields[
        modelFieldName as keyof typeof enhanceConfig.fields
      ]!;

      for (const decorator of decorators) {
        decorator(typePrototype, modelFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

export type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TModel extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TModel]["prototype"],
  number | symbol
>;

export type OutputTypeFieldsConfig<
  TModel extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TModel>>;

export type OutputTypeConfig<TModel extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TModel>;
};

export type OutputTypesEnhanceMap = {
  [TModel in OutputTypesNames]?: OutputTypeConfig<TModel>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}



