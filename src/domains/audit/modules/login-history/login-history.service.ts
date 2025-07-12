import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { login_history } from '@/shared/prismagraphql/login-history';
import {
  FindFirstloginHistoryArgs,
  FindUniqueloginHistoryArgs,
  FindManyloginHistoryArgs,
  GroupByloginHistoryArgs,
  AggregateloginHistoryArgs,
  CreateOneloginHistoryArgs,
  CreateManyloginHistoryArgs,
  UpdateOneloginHistoryArgs,
  UpdateManyloginHistoryArgs,
  DeleteOneloginHistoryArgs,
  DeleteManyloginHistoryArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class LoginHistoryService extends BaseCrudService<
  login_history,
  FindFirstloginHistoryArgs,
  FindUniqueloginHistoryArgs,
  FindManyloginHistoryArgs,
  GroupByloginHistoryArgs,
  AggregateloginHistoryArgs,
  CreateOneloginHistoryArgs,
  CreateManyloginHistoryArgs,
  UpdateOneloginHistoryArgs,
  UpdateManyloginHistoryArgs,
  DeleteOneloginHistoryArgs,
  DeleteManyloginHistoryArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
