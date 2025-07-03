import { PrismaClient } from '@prisma/client';
import { attachmentTypes } from './attachment-type.data';

export async function seedAttachmentTypes(prisma: PrismaClient) {
  await prisma.attachment_type.createMany({
    data: attachmentTypes,
    skipDuplicates: true,
  });
}
