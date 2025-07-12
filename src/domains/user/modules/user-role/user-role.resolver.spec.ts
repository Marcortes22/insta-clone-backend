import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleResolver } from './user-role.resolver';

describe('UserRoleResolver', () => {
  let resolver: UserRoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRoleResolver],
    }).compile();

    resolver = module.get<UserRoleResolver>(UserRoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
