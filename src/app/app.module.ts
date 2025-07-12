import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigurationModule } from '../config/configuration.module';
import { GraphqlConfigService } from '../config/graphql-config.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserDomainModule } from '@domains/user';
import { ContentDomainModule } from '@domains/content';
import { CommunicationDomainModule } from '@domains/communication';
import { NotificationDomainModule } from '@domains/notification';
import { SystemDomainModule } from '@domains/system';
import { AuditDomainModule } from '@domains/audit';

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
