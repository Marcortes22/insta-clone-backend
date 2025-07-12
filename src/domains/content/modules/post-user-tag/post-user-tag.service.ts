import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { post_user_tag } from '@/shared/prismagraphql/post-user-tag';
import {
  FindFirstpostUserTagArgs,
  FindUniquepostUserTagArgs,
  FindManypostUserTagArgs,
  GroupBypostUserTagArgs,
  AggregatepostUserTagArgs,
  CreateOnepostUserTagArgs,
  CreateManypostUserTagArgs,
  UpdateOnepostUserTagArgs,
  UpdateManypostUserTagArgs,
  DeleteOnepostUserTagArgs,
  DeleteManypostUserTagArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class PostUserTagService extends BaseCrudService<
  post_user_tag,
  FindFirstpostUserTagArgs,
  FindUniquepostUserTagArgs,
  FindManypostUserTagArgs,
  GroupBypostUserTagArgs,
  AggregatepostUserTagArgs,
  CreateOnepostUserTagArgs,
  CreateManypostUserTagArgs,
  UpdateOnepostUserTagArgs,
  UpdateManypostUserTagArgs,
  DeleteOnepostUserTagArgs,
  DeleteManypostUserTagArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
