import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  FindFirstattachmentTypeArgs,
  FindUniqueattachmentTypeArgs,
  FindManyattachmentTypeArgs,
  GroupByattachmentTypeArgs,
  AggregateattachmentTypeArgs,
  CreateOneattachmentTypeArgs,
  CreateManyattachmentTypeArgs,
  UpdateOneattachmentTypeArgs,
  UpdateManyattachmentTypeArgs,
  DeleteOneattachmentTypeArgs,
  DeleteManyattachmentTypeArgs,
} from '@/shared/prismagraphql/prisma';
import { attachment_type } from '@/shared/prismagraphql/attachment-type';

@Injectable()
export class AttachmentTypeService extends BaseCrudService<
  attachment_type,
  FindFirstattachmentTypeArgs,
  FindUniqueattachmentTypeArgs,
  FindManyattachmentTypeArgs,
  GroupByattachmentTypeArgs,
  AggregateattachmentTypeArgs,
  CreateOneattachmentTypeArgs,
  CreateManyattachmentTypeArgs,
  UpdateOneattachmentTypeArgs,
  UpdateManyattachmentTypeArgs,
  DeleteOneattachmentTypeArgs,
  DeleteManyattachmentTypeArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
