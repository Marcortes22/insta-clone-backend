import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { saved_post } from '@/shared/prismagraphql/saved-post';
import {
  FindFirstsavedPostArgs,
  FindUniquesavedPostArgs,
  FindManysavedPostArgs,
  GroupBysavedPostArgs,
  AggregatesavedPostArgs,
  CreateOnesavedPostArgs,
  CreateManysavedPostArgs,
  UpdateOnesavedPostArgs,
  UpdateManysavedPostArgs,
  DeleteOnesavedPostArgs,
  DeleteManysavedPostArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class SavedPostService extends BaseCrudService<
  saved_post,
  FindFirstsavedPostArgs,
  FindUniquesavedPostArgs,
  FindManysavedPostArgs,
  GroupBysavedPostArgs,
  AggregatesavedPostArgs,
  CreateOnesavedPostArgs,
  CreateManysavedPostArgs,
  UpdateOnesavedPostArgs,
  UpdateManysavedPostArgs,
  DeleteOnesavedPostArgs,
  DeleteManysavedPostArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
