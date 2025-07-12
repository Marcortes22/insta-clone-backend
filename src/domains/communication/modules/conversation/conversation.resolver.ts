import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConversationService } from './conversation.service';
import {
  conversation,
  FindFirstconversationArgs,
  FindUniqueconversationArgs,
  FindManyconversationArgs,
  conversationGroupByArgs,
  conversationAggregateArgs,
  CreateOneconversationArgs,
  CreateManyconversationArgs,
  UpdateOneconversationArgs,
  UpdateManyconversationArgs,
  DeleteOneconversationArgs,
  DeleteManyconversationArgs,
} from '@/shared/prismagraphql/conversation';
import {
  AggregateConversation,
  ConversationGroupBy,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => conversation, { nullable: true })
  async findFirstConversation(@Args() args: FindFirstconversationArgs) {
    return this.conversationService.findFirst(args);
  }

  @Query(() => conversation, { nullable: true })
  async findUniqueConversation(@Args() args: FindUniqueconversationArgs) {
    return this.conversationService.findUnique(args);
  }

  @Query(() => [conversation])
  async findManyConversation(@Args() args: FindManyconversationArgs) {
    return this.conversationService.findMany(args);
  }

  @Query(() => [ConversationGroupBy])
  async groupByConversation(@Args() args: conversationGroupByArgs) {
    return this.conversationService.groupBy(args);
  }

  @Query(() => AggregateConversation)
  async aggregateConversation(@Args() args: conversationAggregateArgs) {
    return this.conversationService.aggregate(args);
  }

  @Mutation(() => conversation)
  async createOneConversation(@Args() args: CreateOneconversationArgs) {
    return this.conversationService.create(args);
  }

  @Mutation(() => conversation)
  async createManyConversation(@Args() args: CreateManyconversationArgs) {
    return this.conversationService.createMany(args);
  }

  @Mutation(() => conversation, { nullable: true })
  async updateOneConversation(@Args() args: UpdateOneconversationArgs) {
    return this.conversationService.update(args);
  }

  @Mutation(() => conversation)
  async updateManyConversation(@Args() args: UpdateManyconversationArgs) {
    return this.conversationService.updateMany(args);
  }

  @Mutation(() => conversation, { nullable: true })
  async deleteOneConversation(@Args() args: DeleteOneconversationArgs) {
    return this.conversationService.delete(args);
  }

  @Mutation(() => conversation)
  async deleteManyConversation(@Args() args: DeleteManyconversationArgs) {
    return this.conversationService.deleteMany(args);
  }
}
