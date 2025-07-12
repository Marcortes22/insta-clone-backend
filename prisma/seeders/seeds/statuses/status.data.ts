import { Prisma } from '@prisma/client';

export const statuses: Prisma.statusCreateInput[] = [
  {
    name: 'ACTIVE',
  },
  {
    name: 'INACTIVE',
  },
  {
    name: 'SUSPENDED',
  },
  {
    name: 'BANNED',
  },
];
