import { Test, TestingModule } from '@nestjs/testing';
import { NotificationTypeResolver } from './notification-type.resolver';

describe('NotificationTypeResolver', () => {
  let resolver: NotificationTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationTypeResolver],
    }).compile();

    resolver = module.get<NotificationTypeResolver>(NotificationTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
