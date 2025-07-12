import { Prisma } from '@prisma/client';

export const attachmentTypes: Prisma.attachment_typeCreateInput[] = [
  {
    name: 'IMAGE',
  },
  {
    name: 'VIDEO',
  },
  {
    name: 'AUDIO',
  },
  {
    name: 'DOCUMENT',
  },
];
