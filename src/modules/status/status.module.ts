import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusResolver } from './status.resolver';

@Module({
  providers: [StatusService, StatusResolver],
})
export class StatusModule {}
