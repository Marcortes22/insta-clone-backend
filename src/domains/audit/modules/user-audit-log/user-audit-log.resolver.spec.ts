import { Test, TestingModule } from '@nestjs/testing';
import { UserAuditLogResolver } from './user-audit-log.resolver';

describe('UserAuditLogResolver', () => {
  let resolver: UserAuditLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuditLogResolver],
    }).compile();

    resolver = module.get<UserAuditLogResolver>(UserAuditLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
