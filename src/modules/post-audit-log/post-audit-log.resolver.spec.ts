import { Test, TestingModule } from '@nestjs/testing';
import { PostAuditLogResolver } from './post-audit-log.resolver';

describe('PostAuditLogResolver', () => {
  let resolver: PostAuditLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostAuditLogResolver],
    }).compile();

    resolver = module.get<PostAuditLogResolver>(PostAuditLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
