import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  post,
  FindFirstpostArgs,
  FindUniquepostArgs,
  FindManypostArgs,
  postGroupByArgs,
  postAggregateArgs,
  CreateOnepostArgs,
  CreateManypostArgs,
  UpdateOnepostArgs,
  UpdateManypostArgs,
  DeleteOnepostArgs,
  DeleteManypostArgs,
} from '@/shared/prismagraphql/post';

@Injectable()
export class PostService extends BaseCrudService<
  post,
  FindFirstpostArgs,
  FindUniquepostArgs,
  FindManypostArgs,
  postGroupByArgs,
  postAggregateArgs,
  CreateOnepostArgs,
  CreateManypostArgs,
  UpdateOnepostArgs,
  UpdateManypostArgs,
  DeleteOnepostArgs,
  DeleteManypostArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
