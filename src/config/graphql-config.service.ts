import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createGqlOptions(): ApolloDriverConfig {
    const isDev = this.configService.get('ENV') === 'dev';

    return {
      debug: isDev,
      graphiql: isDev,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req, res }) => ({
        request: req,
        response: res,
        user: req.user,
      }),

      formatError: (error) => {
        const originalError = error.extensions?.originalError as Error;

        return {
          message: originalError?.message || error.message,
          code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
        };
      },
      // 🎯 Configuraciones adicionales
      includeStacktraceInErrorResponses: isDev,
    };
  }
}
