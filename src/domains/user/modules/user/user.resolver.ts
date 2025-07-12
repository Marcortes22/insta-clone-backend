import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  user,
  FindFirstuserArgs,
  FindUniqueuserArgs,
  FindManyuserArgs,
  userGroupByArgs,
  userAggregateArgs,
  CreateOneuserArgs,
  CreateManyuserArgs,
  UpdateOneuserArgs,
  UpdateManyuserArgs,
  DeleteOneuserArgs,
  DeleteManyuserArgs,
} from '@/shared/prismagraphql/user';
import { AggregateUser, UserGroupBy } from '@/shared/prismagraphql/prisma';

@Resolver(() => user)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => user, { nullable: true })
  async findFirstUser(@Args() args: FindFirstuserArgs) {
    return this.userService.findFirst(args);
  }

  @Query(() => user, { nullable: true })
  async findUniqueUser(@Args() args: FindUniqueuserArgs) {
    return this.userService.findUnique(args);
  }

  @Query(() => [user])
  async findManyUser(@Args() args: FindManyuserArgs) {
    return this.userService.findMany(args);
  }

  @Query(() => [UserGroupBy])
  async groupByUser(@Args() args: userGroupByArgs) {
    return this.userService.groupBy(args);
  }

  @Query(() => AggregateUser)
  async aggregateUser(@Args() args: userAggregateArgs) {
    return this.userService.aggregate(args);
  }

  @Mutation(() => user)
  async createOneUser(@Args() args: CreateOneuserArgs) {
    return this.userService.create(args);
  }

  @Mutation(() => user)
  async createManyUser(@Args() args: CreateManyuserArgs) {
    return this.userService.createMany(args);
  }

  @Mutation(() => user, { nullable: true })
  async updateOneUser(@Args() args: UpdateOneuserArgs) {
    return this.userService.update(args);
  }

  @Mutation(() => user)
  async updateManyUser(@Args() args: UpdateManyuserArgs) {
    return this.userService.updateMany(args);
  }

  @Mutation(() => user, { nullable: true })
  async deleteOneUser(@Args() args: DeleteOneuserArgs) {
    return this.userService.delete(args);
  }

  @Mutation(() => user)
  async deleteManyUser(@Args() args: DeleteManyuserArgs) {
    return this.userService.deleteMany(args);
  }
}
