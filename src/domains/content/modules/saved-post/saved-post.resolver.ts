import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SavedPostService } from './saved-post.service';
import { saved_post } from '@/shared/prismagraphql/saved-post';
import {
  AggregateSaved_post,
  Saved_postGroupBy,
  FindFirstsavedPostArgs,
  FindUniquesavedPostArgs,
  FindManysavedPostArgs,
  GroupBysavedPostArgs,
  AggregatesavedPostArgs,
  CreateOnesavedPostArgs,
  CreateManysavedPostArgs,
  UpdateOnesavedPostArgs,
  UpdateManysavedPostArgs,
  DeleteOnesavedPostArgs,
  DeleteManysavedPostArgs,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => saved_post)
export class SavedPostResolver {
  constructor(private readonly savedPostService: SavedPostService) {}

  @Query(() => saved_post, { nullable: true })
  async findFirstSavedPost(@Args() args: FindFirstsavedPostArgs) {
    return this.savedPostService.findFirst(args);
  }

  @Query(() => saved_post, { nullable: true })
  async findUniqueSavedPost(@Args() args: FindUniquesavedPostArgs) {
    return this.savedPostService.findUnique(args);
  }

  @Query(() => [saved_post])
  async findManySavedPost(@Args() args: FindManysavedPostArgs) {
    return this.savedPostService.findMany(args);
  }

  @Query(() => [Saved_postGroupBy])
  async groupBySavedPost(@Args() args: GroupBysavedPostArgs) {
    return this.savedPostService.groupBy(args);
  }

  @Query(() => AggregateSaved_post)
  async aggregateSavedPost(@Args() args: AggregatesavedPostArgs) {
    return this.savedPostService.aggregate(args);
  }

  @Mutation(() => saved_post)
  async createOneSavedPost(@Args() args: CreateOnesavedPostArgs) {
    return this.savedPostService.create(args);
  }

  @Mutation(() => saved_post)
  async createManySavedPost(@Args() args: CreateManysavedPostArgs) {
    return this.savedPostService.createMany(args);
  }

  @Mutation(() => saved_post, { nullable: true })
  async updateOneSavedPost(@Args() args: UpdateOnesavedPostArgs) {
    return this.savedPostService.update(args);
  }

  @Mutation(() => saved_post)
  async updateManySavedPost(@Args() args: UpdateManysavedPostArgs) {
    return this.savedPostService.updateMany(args);
  }

  @Mutation(() => saved_post, { nullable: true })
  async deleteOneSavedPost(@Args() args: DeleteOnesavedPostArgs) {
    return this.savedPostService.delete(args);
  }

  @Mutation(() => saved_post)
  async deleteManySavedPost(@Args() args: DeleteManysavedPostArgs) {
    return this.savedPostService.deleteMany(args);
  }
}
