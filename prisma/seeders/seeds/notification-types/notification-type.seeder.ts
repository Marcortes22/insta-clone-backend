import { PrismaClient } from '@prisma/client';
import { notificationTypes } from './notification-type.data';

export async function seedNotificationTypes(prisma: PrismaClient) {
  await prisma.notification_type.createMany({
    data: notificationTypes,
    skipDuplicates: true,
  });
}
