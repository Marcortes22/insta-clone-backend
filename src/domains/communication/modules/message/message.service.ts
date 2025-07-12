import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  message,
  FindFirstmessageArgs,
  FindUniquemessageArgs,
  FindManymessageArgs,
  messageGroupByArgs,
  messageAggregateArgs,
  CreateOnemessageArgs,
  CreateManymessageArgs,
  UpdateOnemessageArgs,
  UpdateManymessageArgs,
  DeleteOnemessageArgs,
  DeleteManymessageArgs,
} from '@/shared/prismagraphql/message';

@Injectable()
export class MessageService extends BaseCrudService<
  message,
  FindFirstmessageArgs,
  FindUniquemessageArgs,
  FindManymessageArgs,
  messageGroupByArgs,
  messageAggregateArgs,
  CreateOnemessageArgs,
  CreateManymessageArgs,
  UpdateOnemessageArgs,
  UpdateManymessageArgs,
  DeleteOnemessageArgs,
  DeleteManymessageArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
