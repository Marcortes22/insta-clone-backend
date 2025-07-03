import { roleCreateInput } from '@/shared/prismagraphql/role';

export const roles: roleCreateInput[] = [
  {
    name: 'ADMIN',
    description: 'System administrator with full access',
  },
  {
    name: 'MODERATOR',
    description: 'Content moderator with limited admin access',
  },
  {
    name: 'USER',
    description: 'Regular user with basic permissions',
  },
];
