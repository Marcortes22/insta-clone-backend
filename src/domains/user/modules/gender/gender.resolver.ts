import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GenderService } from './gender.service';
import {
  AffectedRows,
  AggregateGender,
  GenderGroupBy,
} from '@/shared/prismagraphql/prisma';
import {
  gender,
  FindFirstgenderArgs,
  FindUniquegenderArgs,
  FindManygenderArgs,
  genderGroupByArgs,
  genderAggregateArgs,
  CreateOnegenderArgs,
  CreateManygenderArgs,
  UpdateOnegenderArgs,
  UpdateManygenderArgs,
  DeleteOnegenderArgs,
  DeleteManygenderArgs,
} from '@/shared/prismagraphql/gender';
import { ForbiddenException } from '@nestjs/common';

@Resolver(() => gender)
export class GenderResolver {
  constructor(private readonly genderService: GenderService) {}

  // Find First Query
  @Query(() => gender, { nullable: true })
  async findFirstGender(@Args() args: FindFirstgenderArgs) {
    return this.genderService.findFirst(args);
  }

  // Find Unique Query
  @Query(() => gender, { nullable: true })
  async findUniqueGender(@Args() args: FindUniquegenderArgs) {
    throw new ForbiddenException(
      'This operation is not allowed. Please use findFirstGender instead.',
    );
    // Uncomment the line below if you want to allow findUniqueGender
    //
    return this.genderService.findUnique(args);
  }

  // Find Many Query
  @Query(() => [gender])
  async genders(@Args() args: FindManygenderArgs): Promise<gender[]> {
    return await this.genderService.findMany(args);
  }

  // Group By Query
  @Query(() => [GenderGroupBy])
  async groupByGender(@Args() args: genderGroupByArgs) {
    return this.genderService.groupBy(args);
  }

  // Aggregate Query
  @Query(() => AggregateGender)
  async aggregateGender(@Args() args: genderAggregateArgs) {
    return this.genderService.aggregate(args);
  }

  // Create One Mutation
  @Mutation(() => gender, { nullable: true })
  async createGender(@Args() args: CreateOnegenderArgs) {
    return this.genderService.create(args);
  }

  // Create Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async createManyGenders(
    @Args() args: CreateManygenderArgs,
  ): Promise<AffectedRows> {
    const result = await this.genderService.createMany(args);
    // Prisma's createMany returns { count: number }, which matches AffectedRows
    return result as AffectedRows;
  }

  // Update One Mutation
  @Mutation(() => gender)
  async updateGender(@Args() args: UpdateOnegenderArgs) {
    return this.genderService.update(args);
  }

  // Update Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async updateManyGenders(
    @Args() args: UpdateManygenderArgs,
  ): Promise<AffectedRows> {
    const result = await this.genderService.updateMany(args);
    // Prisma's updateMany returns { count: number }, cast it properly
    return result as unknown as AffectedRows;
  }

  // Delete One Mutation
  @Mutation(() => gender)
  async deleteGender(@Args() args: DeleteOnegenderArgs) {
    return this.genderService.delete(args);
  }

  // Delete Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async deleteManyGenders(
    @Args() args: DeleteManygenderArgs,
  ): Promise<AffectedRows> {
    const result = await this.genderService.deleteMany(args);
    // Prisma's deleteMany returns { count: number }, cast it properly
    return result as unknown as AffectedRows;
  }

  // Simple convenience query for getting all genders
  @Query(() => [gender])
  async getAllGenders(): Promise<gender[]> {
    return this.genderService.findMany({});
  }

  // Get gender by ID
  @Query(() => gender, { nullable: true })
  async getGenderById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<gender | null> {
    return this.genderService.findUnique({
      where: { id },
    });
  }
}
