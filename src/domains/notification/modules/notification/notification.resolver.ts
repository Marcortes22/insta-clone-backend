import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import {
  AffectedRows,
  AggregateNotification,
  NotificationGroupBy,
} from '@/shared/prismagraphql/prisma';
import {
  notification,
  FindFirstnotificationArgs,
  FindUniquenotificationArgs,
  FindManynotificationArgs,
  notificationGroupByArgs,
  notificationAggregateArgs,
  CreateOnenotificationArgs,
  CreateManynotificationArgs,
  UpdateOnenotificationArgs,
  UpdateManynotificationArgs,
  DeleteOnenotificationArgs,
  DeleteManynotificationArgs,
} from '@/shared/prismagraphql/notification';

@Resolver(() => notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  // Find First Query
  @Query(() => notification, { nullable: true })
  async findFirstNotification(@Args() args: FindFirstnotificationArgs) {
    return this.notificationService.findFirst(args);
  }

  // Find Unique Query
  @Query(() => notification, { nullable: true })
  async findUniqueNotification(@Args() args: FindUniquenotificationArgs) {
    return this.notificationService.findUnique(args);
  }

  // Find Many Query
  @Query(() => [notification])
  async notifications(
    @Args() args: FindManynotificationArgs,
  ): Promise<notification[]> {
    return this.notificationService.findMany(args);
  }

  // Group By Query
  @Query(() => [NotificationGroupBy])
  async groupByNotification(@Args() args: notificationGroupByArgs) {
    return this.notificationService.groupBy(args);
  }

  // Aggregate Query
  @Query(() => AggregateNotification)
  async aggregateNotification(@Args() args: notificationAggregateArgs) {
    return this.notificationService.aggregate(args);
  }

  // Create One Mutation
  @Mutation(() => notification, { nullable: true })
  async createNotification(
    @Args() args: CreateOnenotificationArgs,
  ): Promise<notification> {
    return this.notificationService.create(args);
  }

  // Create Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async createManyNotifications(
    @Args() args: CreateManynotificationArgs,
  ): Promise<AffectedRows> {
    const result = await this.notificationService.createMany(args);
    return result as AffectedRows;
  }

  // Update One Mutation
  @Mutation(() => notification)
  async updateNotification(@Args() args: UpdateOnenotificationArgs) {
    return this.notificationService.update(args);
  }

  // Update Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async updateManyNotifications(
    @Args() args: UpdateManynotificationArgs,
  ): Promise<AffectedRows> {
    const result = await this.notificationService.updateMany(args);
    return result as unknown as AffectedRows;
  }

  // Delete One Mutation
  @Mutation(() => notification)
  async deleteNotification(
    @Args() args: DeleteOnenotificationArgs,
  ): Promise<notification> {
    return this.notificationService.delete(args);
  }

  // Delete Many Mutation
  @Mutation(() => AffectedRows, { nullable: true })
  async deleteManyNotifications(
    @Args() args: DeleteManynotificationArgs,
  ): Promise<AffectedRows> {
    const result = await this.notificationService.deleteMany(args);
    return result as unknown as AffectedRows;
  }

  // Simple convenience query for getting all notifications
  @Query(() => [notification])
  async getAllNotifications(): Promise<notification[]> {
    return this.notificationService.findMany({});
  }

  // Get notification by ID
  @Query(() => notification, { nullable: true })
  async getNotificationById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<notification | null> {
    return this.notificationService.findUnique({
      where: { id },
    });
  }
}
