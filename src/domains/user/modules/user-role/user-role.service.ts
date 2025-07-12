import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { user_role } from '@/shared/prismagraphql/user-role';
import {
  FindFirstuserRoleArgs,
  FindUniqueuserRoleArgs,
  FindManyuserRoleArgs,
  GroupByuserRoleArgs,
  AggregateuserRoleArgs,
  CreateOneuserRoleArgs,
  CreateManyuserRoleArgs,
  UpdateOneuserRoleArgs,
  UpdateManyuserRoleArgs,
  DeleteOneuserRoleArgs,
  DeleteManyuserRoleArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class UserRoleService extends BaseCrudService<
  user_role,
  FindFirstuserRoleArgs,
  FindUniqueuserRoleArgs,
  FindManyuserRoleArgs,
  GroupByuserRoleArgs,
  AggregateuserRoleArgs,
  CreateOneuserRoleArgs,
  CreateManyuserRoleArgs,
  UpdateOneuserRoleArgs,
  UpdateManyuserRoleArgs,
  DeleteOneuserRoleArgs,
  DeleteManyuserRoleArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
