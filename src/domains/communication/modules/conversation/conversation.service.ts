import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  conversation,
  FindFirstconversationArgs,
  FindUniqueconversationArgs,
  FindManyconversationArgs,
  conversationGroupByArgs,
  conversationAggregateArgs,
  CreateOneconversationArgs,
  CreateManyconversationArgs,
  UpdateOneconversationArgs,
  UpdateManyconversationArgs,
  DeleteOneconversationArgs,
  DeleteManyconversationArgs,
} from '@/shared/prismagraphql/conversation';

@Injectable()
export class ConversationService extends BaseCrudService<
  conversation,
  FindFirstconversationArgs,
  FindUniqueconversationArgs,
  FindManyconversationArgs,
  conversationGroupByArgs,
  conversationAggregateArgs,
  CreateOneconversationArgs,
  CreateManyconversationArgs,
  UpdateOneconversationArgs,
  UpdateManyconversationArgs,
  DeleteOneconversationArgs,
  DeleteManyconversationArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
