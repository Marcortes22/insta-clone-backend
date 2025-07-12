import { Module } from '@nestjs/common';
import { UserConversationService } from './user-conversation.service';
import { UserConversationResolver } from './user-conversation.resolver';

@Module({
  providers: [UserConversationService, UserConversationResolver],
})
export class UserConversationModule {}
