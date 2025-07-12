import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { user_follow } from '@/shared/prismagraphql/user-follow';
import {
  FindFirstuserFollowArgs,
  FindUniqueuserFollowArgs,
  FindManyuserFollowArgs,
  GroupByuserFollowArgs,
  AggregateuserFollowArgs,
  CreateOneuserFollowArgs,
  CreateManyuserFollowArgs,
  UpdateOneuserFollowArgs,
  UpdateManyuserFollowArgs,
  DeleteOneuserFollowArgs,
  DeleteManyuserFollowArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class UserFollowService extends BaseCrudService<
  user_follow,
  FindFirstuserFollowArgs,
  FindUniqueuserFollowArgs,
  FindManyuserFollowArgs,
  GroupByuserFollowArgs,
  AggregateuserFollowArgs,
  CreateOneuserFollowArgs,
  CreateManyuserFollowArgs,
  UpdateOneuserFollowArgs,
  UpdateManyuserFollowArgs,
  DeleteOneuserFollowArgs,
  DeleteManyuserFollowArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
