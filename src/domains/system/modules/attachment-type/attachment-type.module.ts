import { Module } from '@nestjs/common';
import { AttachmentTypeService } from './attachment-type.service';
import { AttachmentTypeResolver } from './attachment-type.resolver';

@Module({
  providers: [AttachmentTypeService, AttachmentTypeResolver],
})
export class AttachmentTypeModule {}
