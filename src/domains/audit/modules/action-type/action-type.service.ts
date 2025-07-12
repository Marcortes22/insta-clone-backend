import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { action_type } from '@/shared/prismagraphql/action-type';
import {
  FindFirstactionTypeArgs,
  FindUniqueactionTypeArgs,
  FindManyactionTypeArgs,
  GroupByactionTypeArgs,
  AggregateactionTypeArgs,
  CreateOneactionTypeArgs,
  CreateManyactionTypeArgs,
  UpdateOneactionTypeArgs,
  UpdateManyactionTypeArgs,
  DeleteOneactionTypeArgs,
  DeleteManyactionTypeArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class ActionTypeService extends BaseCrudService<
  action_type,
  FindFirstactionTypeArgs,
  FindUniqueactionTypeArgs,
  FindManyactionTypeArgs,
  GroupByactionTypeArgs,
  AggregateactionTypeArgs,
  CreateOneactionTypeArgs,
  CreateManyactionTypeArgs,
  UpdateOneactionTypeArgs,
  UpdateManyactionTypeArgs,
  DeleteOneactionTypeArgs,
  DeleteManyactionTypeArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
