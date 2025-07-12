import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActionTypeService } from './action-type.service';
import {
  AffectedRows,
  AggregateAction_type,
  Action_typeGroupBy,
  FindFirstactionTypeArgs,
  FindUniqueactionTypeArgs,
  FindManyactionTypeArgs,
  GroupByactionTypeArgs,
  AggregateactionTypeArgs,
  CreateOneactionTypeArgs,
  CreateManyactionTypeArgs,
  UpdateOneactionTypeArgs,
  UpdateManyactionTypeArgs,
  DeleteOneactionTypeArgs,
  DeleteManyactionTypeArgs,
} from '@/shared/prismagraphql/prisma';
import { action_type } from '@/shared/prismagraphql/action-type';

@Resolver(() => action_type)
export class ActionTypeResolver {
  constructor(private readonly actionTypeService: ActionTypeService) {}

  // Find First Query
  @Query(() => action_type, { nullable: true })
  async findFirstActionType(@Args() args: FindFirstactionTypeArgs) {
    return this.actionTypeService.findFirst(args);
  }

  // Find Unique Query
  @Query(() => action_type, { nullable: true })
  async findUniqueActionType(@Args() args: FindUniqueactionTypeArgs) {
    return this.actionTypeService.findUnique(args);
  }

  // Find Many Query
  @Query(() => [action_type])
  async actionTypes(
    @Args() args: FindManyactionTypeArgs,
  ): Promise<action_type[]> {
    return this.actionTypeService.findMany(args);
  }

  // Group By Query
  @Query(() => [Action_typeGroupBy])
  async groupByActionType(@Args() args: GroupByactionTypeArgs) {
    return this.actionTypeService.groupBy(args);
  }

  // Aggregate Query
  @Query(() => AggregateAction_type)
  async aggregateActionType(@Args() args: AggregateactionTypeArgs) {
    return this.actionTypeService.aggregate(args);
  }

  // Create One Mutation
  @Mutation(() => action_type, { nullable: true })
  async createActionType(
    @Args() args: CreateOneactionTypeArgs,
  ): Promise<action_type> {
    return this.actionTypeService.create(args);
  }

  // Create Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async createManyActionTypes(
    @Args() args: CreateManyactionTypeArgs,
  ): Promise<AffectedRows> {
    const result = await this.actionTypeService.createMany(args);
    return result as AffectedRows;
  }

  // Update One Mutation
  @Mutation(() => action_type)
  async updateActionType(@Args() args: UpdateOneactionTypeArgs) {
    return this.actionTypeService.update(args);
  }

  // Update Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async updateManyActionTypes(
    @Args() args: UpdateManyactionTypeArgs,
  ): Promise<AffectedRows> {
    const result = await this.actionTypeService.updateMany(args);
    return result as unknown as AffectedRows;
  }

  // Delete One Mutation
  @Mutation(() => action_type)
  async deleteActionType(
    @Args() args: DeleteOneactionTypeArgs,
  ): Promise<action_type> {
    return this.actionTypeService.delete(args);
  }

  // Delete Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async deleteManyActionTypes(
    @Args() args: DeleteManyactionTypeArgs,
  ): Promise<AffectedRows> {
    const result = await this.actionTypeService.deleteMany(args);
    return result as unknown as AffectedRows;
  }

  // Simple convenience query for getting all action types
  @Query(() => [action_type])
  async getAllActionTypes(): Promise<action_type[]> {
    return this.actionTypeService.findMany({});
  }

  // Get action type by ID
  @Query(() => action_type, { nullable: true })
  async getActionTypeById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<action_type | null> {
    return this.actionTypeService.findUnique({
      where: { id },
    });
  }
}
