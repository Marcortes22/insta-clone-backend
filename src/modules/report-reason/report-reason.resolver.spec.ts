import { Test, TestingModule } from '@nestjs/testing';
import { ReportReasonResolver } from './report-reason.resolver';

describe('ReportReasonResolver', () => {
  let resolver: ReportReasonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportReasonResolver],
    }).compile();

    resolver = module.get<ReportReasonResolver>(ReportReasonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
