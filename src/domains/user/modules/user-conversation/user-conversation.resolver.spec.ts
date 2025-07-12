import { Test, TestingModule } from '@nestjs/testing';
import { UserConversationResolver } from './user-conversation.resolver';

describe('UserConversationResolver', () => {
  let resolver: UserConversationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserConversationResolver],
    }).compile();

    resolver = module.get<UserConversationResolver>(UserConversationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
