import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { post_media } from '@/shared/prismagraphql/post-media';
import {
  FindFirstpostMediaArgs,
  FindUniquepostMediaArgs,
  FindManypostMediaArgs,
  GroupBypostMediaArgs,
  AggregatepostMediaArgs,
  CreateOnepostMediaArgs,
  CreateManypostMediaArgs,
  UpdateOnepostMediaArgs,
  UpdateManypostMediaArgs,
  DeleteOnepostMediaArgs,
  DeleteManypostMediaArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class PostMediaService extends BaseCrudService<
  post_media,
  FindFirstpostMediaArgs,
  FindUniquepostMediaArgs,
  FindManypostMediaArgs,
  GroupBypostMediaArgs,
  AggregatepostMediaArgs,
  CreateOnepostMediaArgs,
  CreateManypostMediaArgs,
  UpdateOnepostMediaArgs,
  UpdateManypostMediaArgs,
  DeleteOnepostMediaArgs,
  DeleteManypostMediaArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
