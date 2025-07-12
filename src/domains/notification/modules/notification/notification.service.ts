import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
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

@Injectable()
export class NotificationService extends BaseCrudService<
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
  DeleteManynotificationArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
