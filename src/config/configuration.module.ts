import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfigService } from './graphql-config.service';

@Module({
  imports: [ConfigModule], // 👈
  providers: [GraphqlConfigService],
  exports: [GraphqlConfigService],
})
export class ConfigurationModule {}
