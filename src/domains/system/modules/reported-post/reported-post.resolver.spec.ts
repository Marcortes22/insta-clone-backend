import { Test, TestingModule } from '@nestjs/testing';
import { ReportedPostResolver } from './reported-post.resolver';

describe('ReportedPostResolver', () => {
  let resolver: ReportedPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportedPostResolver],
    }).compile();

    resolver = module.get<ReportedPostResolver>(ReportedPostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
