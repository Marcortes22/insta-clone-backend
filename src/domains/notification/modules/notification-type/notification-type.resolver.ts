import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationTypeService } from './notification-type.service';
import { notification_type } from '@/shared/prismagraphql/notification-type';
import {
  AggregateNotification_type,
  Notification_typeGroupBy,
  FindFirstnotificationTypeArgs,
  FindUniquenotificationTypeArgs,
  FindManynotificationTypeArgs,
  GroupBynotificationTypeArgs,
  AggregatenotificationTypeArgs,
  CreateOnenotificationTypeArgs,
  CreateManynotificationTypeArgs,
  UpdateOnenotificationTypeArgs,
  UpdateManynotificationTypeArgs,
  DeleteOnenotificationTypeArgs,
  DeleteManynotificationTypeArgs,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => notification_type)
export class NotificationTypeResolver {
  constructor(
    private readonly notificationTypeService: NotificationTypeService,
  ) {}

  @Query(() => notification_type, { nullable: true })
  async findFirstNotificationType(@Args() args: FindFirstnotificationTypeArgs) {
    return this.notificationTypeService.findFirst(args);
  }

  @Query(() => notification_type, { nullable: true })
  async findUniqueNotificationType(
    @Args() args: FindUniquenotificationTypeArgs,
  ) {
    return this.notificationTypeService.findUnique(args);
  }

  @Query(() => [notification_type])
  async findManyNotificationType(@Args() args: FindManynotificationTypeArgs) {
    return this.notificationTypeService.findMany(args);
  }

  @Query(() => [Notification_typeGroupBy])
  async groupByNotificationType(@Args() args: GroupBynotificationTypeArgs) {
    return this.notificationTypeService.groupBy(args);
  }

  @Query(() => AggregateNotification_type)
  async aggregateNotificationType(@Args() args: AggregatenotificationTypeArgs) {
    return this.notificationTypeService.aggregate(args);
  }

  @Mutation(() => notification_type)
  async createOneNotificationType(@Args() args: CreateOnenotificationTypeArgs) {
    return this.notificationTypeService.create(args);
  }

  @Mutation(() => notification_type)
  async createManyNotificationType(
    @Args() args: CreateManynotificationTypeArgs,
  ) {
    return this.notificationTypeService.createMany(args);
  }

  @Mutation(() => notification_type, { nullable: true })
  async updateOneNotificationType(@Args() args: UpdateOnenotificationTypeArgs) {
    return this.notificationTypeService.update(args);
  }

  @Mutation(() => notification_type)
  async updateManyNotificationType(
    @Args() args: UpdateManynotificationTypeArgs,
  ) {
    return this.notificationTypeService.updateMany(args);
  }

  @Mutation(() => notification_type, { nullable: true })
  async deleteOneNotificationType(@Args() args: DeleteOnenotificationTypeArgs) {
    return this.notificationTypeService.delete(args);
  }

  @Mutation(() => notification_type)
  async deleteManyNotificationType(
    @Args() args: DeleteManynotificationTypeArgs,
  ) {
    return this.notificationTypeService.deleteMany(args);
  }
}
