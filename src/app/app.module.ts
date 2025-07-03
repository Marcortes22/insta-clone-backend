import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@shared/shared.module';
import { GenderModule } from '@modules/gender/gender.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.ENV === 'dev',
      debug: process.env.ENV === 'dev',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ request: req }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    GenderModule,
  ],
  providers: [],
})
export class AppModule {}
