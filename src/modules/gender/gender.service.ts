import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  gender,
  FindFirstgenderArgs,
  FindUniquegenderArgs,
  FindManygenderArgs,
  genderGroupByArgs,
  genderAggregateArgs,
  CreateOnegenderArgs,
  CreateManygenderArgs,
  UpdateOnegenderArgs,
  UpdateManygenderArgs,
  DeleteOnegenderArgs,
  DeleteManygenderArgs,
} from '@/shared/prismagraphql/gender';

@Injectable()
export class GenderService extends BaseCrudService<
  gender,
  FindFirstgenderArgs,
  FindUniquegenderArgs,
  FindManygenderArgs,
  genderGroupByArgs,
  genderAggregateArgs,
  CreateOnegenderArgs,
  CreateManygenderArgs,
  UpdateOnegenderArgs,
  UpdateManygenderArgs,
  DeleteOnegenderArgs,
  DeleteManygenderArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
