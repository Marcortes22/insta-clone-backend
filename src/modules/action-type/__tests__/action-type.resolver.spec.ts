import { Test, TestingModule } from '@nestjs/testing';
import { ActionTypeResolver } from '../action-type.resolver';
import { ActionTypeService } from '../action-type.service';

describe('ActionTypeResolver', () => {
  let resolver: ActionTypeResolver;
  let service: ActionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActionTypeResolver,
        {
          provide: ActionTypeService,
          useValue: {
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            createMany: jest.fn(),
            update: jest.fn(),
            updateMany: jest.fn(),
            delete: jest.fn(),
            deleteMany: jest.fn(),
            groupBy: jest.fn(),
            aggregate: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<ActionTypeResolver>(ActionTypeResolver);
    service = module.get<ActionTypeService>(ActionTypeService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('actionTypes', () => {
    it('should return an array of action types', async () => {
      const result = [{ id: 1, name: 'CREATE' }];
      jest.spyOn(service, 'findMany').mockResolvedValue(result);

      expect(await resolver.actionTypes({})).toBe(result);
    });
  });

  describe('getActionTypeById', () => {
    it('should return a single action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(service, 'findUnique').mockResolvedValue(result);

      expect(await resolver.getActionTypeById(1)).toBe(result);
    });
  });

  describe('createActionType', () => {
    it('should create a new action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(
        await resolver.createActionType({ data: { name: 'CREATE' } }),
      ).toBe(result);
    });
  });

  describe('updateActionType', () => {
    it('should update an action type', async () => {
      const result = { id: 1, name: 'UPDATE' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(
        await resolver.updateActionType({ where: { id: 1 }, data: {} }),
      ).toBe(result);
    });
  });

  describe('deleteActionType', () => {
    it('should delete an action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(service, 'delete').mockResolvedValue(result);

      expect(await resolver.deleteActionType({ where: { id: 1 } })).toBe(
        result,
      );
    });
  });
});
