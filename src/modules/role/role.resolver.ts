import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import {
  role,
  FindFirstroleArgs,
  FindUniqueroleArgs,
  FindManyroleArgs,
  roleGroupByArgs,
  roleAggregateArgs,
  CreateOneroleArgs,
  CreateManyroleArgs,
  UpdateOneroleArgs,
  UpdateManyroleArgs,
  DeleteOneroleArgs,
  DeleteManyroleArgs,
} from '@/shared/prismagraphql/role';
import { AggregateRole, RoleGroupBy } from '@/shared/prismagraphql/prisma';

@Resolver(() => role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => role, { nullable: true })
  async findFirstRole(@Args() args: FindFirstroleArgs) {
    return this.roleService.findFirst(args);
  }

  @Query(() => role, { nullable: true })
  async findUniqueRole(@Args() args: FindUniqueroleArgs) {
    return this.roleService.findUnique(args);
  }

  @Query(() => [role])
  async findManyRole(@Args() args: FindManyroleArgs) {
    return this.roleService.findMany(args);
  }

  @Query(() => [RoleGroupBy])
  async groupByRole(@Args() args: roleGroupByArgs) {
    return this.roleService.groupBy(args);
  }

  @Query(() => AggregateRole)
  async aggregateRole(@Args() args: roleAggregateArgs) {
    return this.roleService.aggregate(args);
  }

  @Mutation(() => role)
  async createOneRole(@Args() args: CreateOneroleArgs) {
    return this.roleService.create(args);
  }

  @Mutation(() => role)
  async createManyRole(@Args() args: CreateManyroleArgs) {
    return this.roleService.createMany(args);
  }

  @Mutation(() => role, { nullable: true })
  async updateOneRole(@Args() args: UpdateOneroleArgs) {
    return this.roleService.update(args);
  }

  @Mutation(() => role)
  async updateManyRole(@Args() args: UpdateManyroleArgs) {
    return this.roleService.updateMany(args);
  }

  @Mutation(() => role, { nullable: true })
  async deleteOneRole(@Args() args: DeleteOneroleArgs) {
    return this.roleService.delete(args);
  }

  @Mutation(() => role)
  async deleteManyRole(@Args() args: DeleteManyroleArgs) {
    return this.roleService.deleteMany(args);
  }
}
