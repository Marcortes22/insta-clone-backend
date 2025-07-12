import { Test, TestingModule } from '@nestjs/testing';
import { NotificationTypeService } from './notification-type.service';

describe('NotificationTypeService', () => {
  let service: NotificationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationTypeService],
    }).compile();

    service = module.get<NotificationTypeService>(NotificationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
