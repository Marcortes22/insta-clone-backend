import { PrismaModule } from '@/prisma/prisma.module';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    PrismaModule,
  ],
  exports: [ConfigModule, PrismaModule],
})
export class SharedModule {}
