import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import {
  location,
  FindFirstlocationArgs,
  FindUniquelocationArgs,
  FindManylocationArgs,
  locationGroupByArgs,
  locationAggregateArgs,
  CreateOnelocationArgs,
  CreateManylocationArgs,
  UpdateOnelocationArgs,
  UpdateManylocationArgs,
  DeleteOnelocationArgs,
  DeleteManylocationArgs,
} from '@/shared/prismagraphql/location';

@Injectable()
export class LocationService extends BaseCrudService<
  location,
  FindFirstlocationArgs,
  FindUniquelocationArgs,
  FindManylocationArgs,
  locationGroupByArgs,
  locationAggregateArgs,
  CreateOnelocationArgs,
  CreateManylocationArgs,
  UpdateOnelocationArgs,
  UpdateManylocationArgs,
  DeleteOnelocationArgs,
  DeleteManylocationArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
