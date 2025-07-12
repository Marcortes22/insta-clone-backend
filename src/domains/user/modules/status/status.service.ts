import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  status,
  FindFirststatusArgs,
  FindUniquestatusArgs,
  FindManystatusArgs,
  statusGroupByArgs,
  statusAggregateArgs,
  CreateOnestatusArgs,
  CreateManystatusArgs,
  UpdateOnestatusArgs,
  UpdateManystatusArgs,
  DeleteOnestatusArgs,
  DeleteManystatusArgs,
} from '@/shared/prismagraphql/status';

@Injectable()
export class StatusService extends BaseCrudService<
  status,
  FindFirststatusArgs,
  FindUniquestatusArgs,
  FindManystatusArgs,
  statusGroupByArgs,
  statusAggregateArgs,
  CreateOnestatusArgs,
  CreateManystatusArgs,
  UpdateOnestatusArgs,
  UpdateManystatusArgs,
  DeleteOnestatusArgs,
  DeleteManystatusArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
