import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { user_conversation } from '@/shared/prismagraphql/user-conversation';
import {
  FindFirstuserConversationArgs,
  FindUniqueuserConversationArgs,
  FindManyuserConversationArgs,
  GroupByuserConversationArgs,
  AggregateuserConversationArgs,
  CreateOneuserConversationArgs,
  CreateManyuserConversationArgs,
  UpdateOneuserConversationArgs,
  UpdateManyuserConversationArgs,
  DeleteOneuserConversationArgs,
  DeleteManyuserConversationArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class UserConversationService extends BaseCrudService<
  user_conversation,
  FindFirstuserConversationArgs,
  FindUniqueuserConversationArgs,
  FindManyuserConversationArgs,
  GroupByuserConversationArgs,
  AggregateuserConversationArgs,
  CreateOneuserConversationArgs,
  CreateManyuserConversationArgs,
  UpdateOneuserConversationArgs,
  UpdateManyuserConversationArgs,
  DeleteOneuserConversationArgs,
  DeleteManyuserConversationArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
