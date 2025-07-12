import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLError } from 'graphql';

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
      includeStacktraceInErrorResponses: isDev,
      context: ({ req, res }) => ({
        request: req,
        response: res,
        user: req.user,
      }),

      formatError: (error: GraphQLError) => {
        const baseFormattedError = {
          message: error.message,
          code: error.extensions?.code || 'INTERNAL_ERROR',
        };

        if (isDev) {
          return {
            ...baseFormattedError,
            path: error.path,
            locations: error.locations,
            extensions: error.extensions,
            originalError: error.originalError,
          };
        }

        return baseFormattedError;
      },
    };
  }
}
