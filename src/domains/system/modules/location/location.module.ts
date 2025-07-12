import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';

@Module({
  providers: [LocationService, LocationResolver],
})
export class LocationModule {}
