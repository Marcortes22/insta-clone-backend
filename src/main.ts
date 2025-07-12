import { AppModule } from '@app/app.module';
import { ConsoleLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core/nest-factory';
import { Logger } from '@nestjs/common';

import { PrismaClientExceptionFilter } from './shared/exception-filter/prisma-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });

  const logger = new Logger('Bootstrap');
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') ?? 3000;
  await app.listen(port);

  logger.log(`🚀 Application is running on: http://localhost:${port}`);
  logger.log(
    `🚀 GraphQL Playground available at: http://localhost:${port}/graphql`,
  );
}
bootstrap();
