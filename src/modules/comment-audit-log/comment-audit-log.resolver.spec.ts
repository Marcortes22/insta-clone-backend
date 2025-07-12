import { Test, TestingModule } from '@nestjs/testing';
import { CommentAuditLogResolver } from './comment-audit-log.resolver';

describe('CommentAuditLogResolver', () => {
  let resolver: CommentAuditLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentAuditLogResolver],
    }).compile();

    resolver = module.get<CommentAuditLogResolver>(CommentAuditLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
