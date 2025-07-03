import { PrismaClient } from '@prisma/client';
import { seedGenders } from './seeds/genders/gender.seeder';
import { seedActionTypes } from './seeds/action-types/action-type.seeder';
import { seedAttachmentTypes } from './seeds/attachment-types/attachment-type.seeder';
import { seedStatuses } from './seeds/statuses/status.seeder';
import { seedRoles } from './seeds/roles/role.seeder';
import { seedLocations } from './seeds/locations/location.seeder';
import { seedReportReasons } from './seeds/report-reasons/report-reason.seeder';
import { seedNotificationTypes } from './seeds/notification-types/notification-type.seeder';
import { seedUsers } from './seeds/users/user.seeder';
import { seedConversations } from './seeds/conversations/conversation.seeder';
import { seedPosts } from './seeds/posts/post.seeder';
import { seedUserRoles } from './seeds/user-roles/user-role.seeder';
import { seedUserFollows } from './seeds/user-follows/user-follow.seeder';
import { seedLikedPosts } from './seeds/liked-posts/liked-post.seeder';
import { seedComments } from './seeds/comments/comment.seeder';
import { clearDatabase } from './clear-database';
import { executeSeed } from './execute-seed';
import { Logger } from '@nestjs/common';

const logger = new Logger('Seeder');
const prisma = new PrismaClient();

async function main() {
  await clearDatabase(prisma);

  // 1. Seed independent tables (no foreign keys)
  await executeSeed('action-types', prisma, seedActionTypes);
  await executeSeed('attachment-types', prisma, seedAttachmentTypes);
  await executeSeed('genders', prisma, seedGenders);
  await executeSeed('statuses', prisma, seedStatuses);
  await executeSeed('roles', prisma, seedRoles);
  await executeSeed('locations', prisma, seedLocations);
  await executeSeed('report-reasons', prisma, seedReportReasons);
  await executeSeed('notification-types', prisma, seedNotificationTypes);

  // 2. Seed users (depends on genders and statuses)
  await executeSeed('users', prisma, seedUsers);

  // 3. Seed conversations (independent)
  await executeSeed('conversations', prisma, seedConversations);

  // 4. Seed posts (depends on users and locations)
  await executeSeed('posts', prisma, seedPosts);

  // 5. Seed relationship tables
  await executeSeed('user-roles', prisma, seedUserRoles);
  await executeSeed('user-follows', prisma, seedUserFollows);
  await executeSeed('liked-posts', prisma, seedLikedPosts);
  await executeSeed('comments', prisma, seedComments);

  logger.log('🎉 All seeders completed successfully!');
}

async function run() {
  try {
    await main();
  } catch (e) {
    logger.error('💥 Seeding failed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

run();
