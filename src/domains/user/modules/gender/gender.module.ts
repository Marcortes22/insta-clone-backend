import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderResolver } from './gender.resolver';

@Module({
  providers: [GenderResolver, GenderService],
})
export class GenderModule {}
