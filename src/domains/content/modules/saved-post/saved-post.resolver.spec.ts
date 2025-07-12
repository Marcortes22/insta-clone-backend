import { Test, TestingModule } from '@nestjs/testing';
import { SavedPostResolver } from './saved-post.resolver';

describe('SavedPostResolver', () => {
  let resolver: SavedPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedPostResolver],
    }).compile();

    resolver = module.get<SavedPostResolver>(SavedPostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
