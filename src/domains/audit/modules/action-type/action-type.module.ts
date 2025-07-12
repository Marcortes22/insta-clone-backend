import { Module } from '@nestjs/common';
import { ActionTypeService } from './action-type.service';
import { ActionTypeResolver } from './action-type.resolver';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ActionTypeResolver, ActionTypeService],
  exports: [ActionTypeService],
})
export class ActionTypeModule {}
