import { PrismaModule } from '@/prisma/prisma.module';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [PrismaModule],
  exports: [PrismaModule],
})
export class SharedModule {}
