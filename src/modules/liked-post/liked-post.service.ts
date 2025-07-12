import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { liked_post } from '@/shared/prismagraphql/liked-post';
import {
  FindFirstlikedPostArgs,
  FindUniquelikedPostArgs,
  FindManylikedPostArgs,
  GroupBylikedPostArgs,
  AggregatelikedPostArgs,
  CreateOnelikedPostArgs,
  CreateManylikedPostArgs,
  UpdateOnelikedPostArgs,
  UpdateManylikedPostArgs,
  DeleteOnelikedPostArgs,
  DeleteManylikedPostArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class LikedPostService extends BaseCrudService<
  liked_post,
  FindFirstlikedPostArgs,
  FindUniquelikedPostArgs,
  FindManylikedPostArgs,
  GroupBylikedPostArgs,
  AggregatelikedPostArgs,
  CreateOnelikedPostArgs,
  CreateManylikedPostArgs,
  UpdateOnelikedPostArgs,
  UpdateManylikedPostArgs,
  DeleteOnelikedPostArgs,
  DeleteManylikedPostArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
