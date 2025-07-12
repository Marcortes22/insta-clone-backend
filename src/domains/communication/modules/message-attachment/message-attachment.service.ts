import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { message_attachment } from '@/shared/prismagraphql/message-attachment';
import {
  FindFirstmessageAttachmentArgs,
  FindUniquemessageAttachmentArgs,
  FindManymessageAttachmentArgs,
  GroupBymessageAttachmentArgs,
  AggregatemessageAttachmentArgs,
  CreateOnemessageAttachmentArgs,
  CreateManymessageAttachmentArgs,
  UpdateOnemessageAttachmentArgs,
  UpdateManymessageAttachmentArgs,
  DeleteOnemessageAttachmentArgs,
  DeleteManymessageAttachmentArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class MessageAttachmentService extends BaseCrudService<
  message_attachment,
  FindFirstmessageAttachmentArgs,
  FindUniquemessageAttachmentArgs,
  FindManymessageAttachmentArgs,
  GroupBymessageAttachmentArgs,
  AggregatemessageAttachmentArgs,
  CreateOnemessageAttachmentArgs,
  CreateManymessageAttachmentArgs,
  UpdateOnemessageAttachmentArgs,
  UpdateManymessageAttachmentArgs,
  DeleteOnemessageAttachmentArgs,
  DeleteManymessageAttachmentArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
