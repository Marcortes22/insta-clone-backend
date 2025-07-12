import { Test, TestingModule } from '@nestjs/testing';
import { LikedPostResolver } from './liked-post.resolver';

describe('LikedPostResolver', () => {
  let resolver: LikedPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedPostResolver],
    }).compile();

    resolver = module.get<LikedPostResolver>(LikedPostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
