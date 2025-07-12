import { Test, TestingModule } from '@nestjs/testing';
import { LoginHistoryResolver } from './login-history.resolver';

describe('LoginHistoryResolver', () => {
  let resolver: LoginHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginHistoryResolver],
    }).compile();

    resolver = module.get<LoginHistoryResolver>(LoginHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
