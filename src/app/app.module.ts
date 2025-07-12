import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigurationModule } from '@config/configuration.module';
import { GraphqlConfigService } from '@config/graphql-config.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import {
  UserDomainModule,
  ContentDomainModule,
  CommunicationDomainModule,
  NotificationDomainModule,
  SystemDomainModule,
  AuditDomainModule,
} from '@domains/index';

@Module({
  imports: [
    SharedModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigurationModule],
      useClass: GraphqlConfigService,
    }),

    UserDomainModule,
    ContentDomainModule,
    CommunicationDomainModule,
    NotificationDomainModule,
    SystemDomainModule,
    AuditDomainModule,
  ],
  providers: [],
})
export class AppModule {}
