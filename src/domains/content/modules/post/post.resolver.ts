import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import {
  AffectedRows,
  AggregatePost,
  PostGroupBy,
} from '@/shared/prismagraphql/prisma';
import {
  post,
  FindFirstpostArgs,
  FindUniquepostArgs,
  FindManypostArgs,
  postGroupByArgs,
  postAggregateArgs,
  CreateOnepostArgs,
  CreateManypostArgs,
  UpdateOnepostArgs,
  UpdateManypostArgs,
  DeleteOnepostArgs,
  DeleteManypostArgs,
} from '@/shared/prismagraphql/post';

@Resolver(() => post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => post, { nullable: true })
  async findFirstPost(@Args() args: FindFirstpostArgs) {
    return this.postService.findFirst(args);
  }

  @Query(() => post, { nullable: true })
  async findUniquePost(@Args() args: FindUniquepostArgs) {
    return this.postService.findUnique(args);
  }

  @Query(() => [post])
  async posts(@Args() args: FindManypostArgs): Promise<post[]> {
    return this.postService.findMany(args);
  }

  @Query(() => [PostGroupBy])
  async groupByPost(@Args() args: postGroupByArgs) {
    return this.postService.groupBy(args);
  }

  @Query(() => AggregatePost)
  async aggregatePost(@Args() args: postAggregateArgs) {
    return this.postService.aggregate(args);
  }

  @Mutation(() => post, { nullable: true })
  async createPost(@Args() args: CreateOnepostArgs): Promise<post> {
    return this.postService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  async createManyPosts(
    @Args() args: CreateManypostArgs,
  ): Promise<AffectedRows> {
    const result = await this.postService.createMany(args);
    return result as AffectedRows;
  }

  @Mutation(() => post)
  async updatePost(@Args() args: UpdateOnepostArgs) {
    return this.postService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  async updateManyPosts(
    @Args() args: UpdateManypostArgs,
  ): Promise<AffectedRows> {
    const result = await this.postService.updateMany(args);
    return result as unknown as AffectedRows;
  }

  @Mutation(() => post)
  async deletePost(@Args() args: DeleteOnepostArgs): Promise<post> {
    return this.postService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  async deleteManyPosts(
    @Args() args: DeleteManypostArgs,
  ): Promise<AffectedRows> {
    const result = await this.postService.deleteMany(args);
    return result as unknown as AffectedRows;
  }

  @Query(() => [post])
  async getAllPosts(): Promise<post[]> {
    return this.postService.findMany({});
  }

  @Query(() => post, { nullable: true })
  async getPostById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<post | null> {
    return this.postService.findUnique({
      where: { id },
    });
  }
}
