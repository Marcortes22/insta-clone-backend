import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowResolver } from './user-follow.resolver';

describe('UserFollowResolver', () => {
  let resolver: UserFollowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowResolver],
    }).compile();

    resolver = module.get<UserFollowResolver>(UserFollowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
