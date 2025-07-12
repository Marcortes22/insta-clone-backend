import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { notification_type } from '@/shared/prismagraphql/notification-type';
import {
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

@Injectable()
export class NotificationTypeService extends BaseCrudService<
  notification_type,
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
  DeleteManynotificationTypeArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
