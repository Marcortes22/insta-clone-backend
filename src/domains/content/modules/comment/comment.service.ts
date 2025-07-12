import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  comment,
  FindFirstcommentArgs,
  FindUniquecommentArgs,
  FindManycommentArgs,
  commentGroupByArgs,
  commentAggregateArgs,
  CreateOnecommentArgs,
  CreateManycommentArgs,
  UpdateOnecommentArgs,
  UpdateManycommentArgs,
  DeleteOnecommentArgs,
  DeleteManycommentArgs,
} from '@/shared/prismagraphql/comment';

@Injectable()
export class CommentService extends BaseCrudService<
  comment,
  FindFirstcommentArgs,
  FindUniquecommentArgs,
  FindManycommentArgs,
  commentGroupByArgs,
  commentAggregateArgs,
  CreateOnecommentArgs,
  CreateManycommentArgs,
  UpdateOnecommentArgs,
  UpdateManycommentArgs,
  DeleteOnecommentArgs,
  DeleteManycommentArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
