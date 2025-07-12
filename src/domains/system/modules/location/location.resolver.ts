import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';
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
import {
  AggregateLocation,
  LocationGroupBy,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => location, { nullable: true })
  async findFirstLocation(@Args() args: FindFirstlocationArgs) {
    return this.locationService.findFirst(args);
  }

  @Query(() => location, { nullable: true })
  async findUniqueLocation(@Args() args: FindUniquelocationArgs) {
    return this.locationService.findUnique(args);
  }

  @Query(() => [location])
  async findManyLocation(@Args() args: FindManylocationArgs) {
    return this.locationService.findMany(args);
  }

  @Query(() => [LocationGroupBy])
  async groupByLocation(@Args() args: locationGroupByArgs) {
    return this.locationService.groupBy(args);
  }

  @Query(() => AggregateLocation)
  async aggregateLocation(@Args() args: locationAggregateArgs) {
    return this.locationService.aggregate(args);
  }

  @Mutation(() => location)
  async createOneLocation(@Args() args: CreateOnelocationArgs) {
    return this.locationService.create(args);
  }

  @Mutation(() => location)
  async createManyLocation(@Args() args: CreateManylocationArgs) {
    return this.locationService.createMany(args);
  }

  @Mutation(() => location, { nullable: true })
  async updateOneLocation(@Args() args: UpdateOnelocationArgs) {
    return this.locationService.update(args);
  }

  @Mutation(() => location)
  async updateManyLocation(@Args() args: UpdateManylocationArgs) {
    return this.locationService.updateMany(args);
  }

  @Mutation(() => location, { nullable: true })
  async deleteOneLocation(@Args() args: DeleteOnelocationArgs) {
    return this.locationService.delete(args);
  }

  @Mutation(() => location)
  async deleteManyLocation(@Args() args: DeleteManylocationArgs) {
    return this.locationService.deleteMany(args);
  }
}
