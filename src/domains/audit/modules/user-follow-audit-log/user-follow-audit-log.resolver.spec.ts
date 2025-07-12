import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowAuditLogResolver } from './user-follow-audit-log.resolver';

describe('UserFollowAuditLogResolver', () => {
  let resolver: UserFollowAuditLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowAuditLogResolver],
    }).compile();

    resolver = module.get<UserFollowAuditLogResolver>(
      UserFollowAuditLogResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
