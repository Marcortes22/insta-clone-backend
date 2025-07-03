import { statusCreateInput } from '@/shared/prismagraphql/status';

export const statuses: statusCreateInput[] = [
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
