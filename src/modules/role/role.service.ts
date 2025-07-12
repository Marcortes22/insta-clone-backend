import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  role,
  FindFirstroleArgs,
  FindUniqueroleArgs,
  FindManyroleArgs,
  roleGroupByArgs,
  roleAggregateArgs,
  CreateOneroleArgs,
  CreateManyroleArgs,
  UpdateOneroleArgs,
  UpdateManyroleArgs,
  DeleteOneroleArgs,
  DeleteManyroleArgs,
} from '@/shared/prismagraphql/role';

@Injectable()
export class RoleService extends BaseCrudService<
  role,
  FindFirstroleArgs,
  FindUniqueroleArgs,
  FindManyroleArgs,
  roleGroupByArgs,
  roleAggregateArgs,
  CreateOneroleArgs,
  CreateManyroleArgs,
  UpdateOneroleArgs,
  UpdateManyroleArgs,
  DeleteOneroleArgs,
  DeleteManyroleArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
