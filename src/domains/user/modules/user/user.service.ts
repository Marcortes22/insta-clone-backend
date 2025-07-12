import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  user,
  FindFirstuserArgs,
  FindUniqueuserArgs,
  FindManyuserArgs,
  userGroupByArgs,
  userAggregateArgs,
  CreateOneuserArgs,
  CreateManyuserArgs,
  UpdateOneuserArgs,
  UpdateManyuserArgs,
  DeleteOneuserArgs,
  DeleteManyuserArgs,
} from '@/shared/prismagraphql/user';

@Injectable()
export class UserService extends BaseCrudService<
  user,
  FindFirstuserArgs,
  FindUniqueuserArgs,
  FindManyuserArgs,
  userGroupByArgs,
  userAggregateArgs,
  CreateOneuserArgs,
  CreateManyuserArgs,
  UpdateOneuserArgs,
  UpdateManyuserArgs,
  DeleteOneuserArgs,
  DeleteManyuserArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
