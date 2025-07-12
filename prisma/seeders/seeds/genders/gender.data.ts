import { Prisma } from '@prisma/client';

export const genders: Prisma.genderCreateInput[] = [
  {
    name: 'Male',
  },
  {
    name: 'Female',
  },
  {
    name: 'Other',
  },
];
