import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const logger = new Logger('clearDatabase');
export const clearDatabase = async (prisma: PrismaClient) => {
  try {
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;');
    await prisma.user_follow_audit_log.deleteMany();
    await prisma.user_follow.deleteMany();
    await prisma.user_role.deleteMany();
    await prisma.user_conversation.deleteMany();
    await prisma.conversation.deleteMany();
    await prisma.login_history.deleteMany();
    await prisma.comment_audit_log.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.post_user_tag.deleteMany();
    await prisma.liked_post.deleteMany();
    await prisma.saved_post.deleteMany();
    await prisma.post_media.deleteMany();
    await prisma.reported_post.deleteMany();
    await prisma.post_audit_log.deleteMany();
    await prisma.post.deleteMany();
    await prisma.notification.deleteMany();
    await prisma.notification_type.deleteMany();
    await prisma.message_attachment.deleteMany();
    await prisma.message.deleteMany();
    await prisma.attachment_type.deleteMany();
    await prisma.gender.deleteMany();
    await prisma.status.deleteMany();
    await prisma.user_audit_log.deleteMany();
    await prisma.user.deleteMany();
    await prisma.report_reason.deleteMany();
    await prisma.location.deleteMany();
    await prisma.role.deleteMany();
    await prisma.action_type.deleteMany();

    // Reset auto-increment counters to 1
    await prisma.$executeRawUnsafe(
      'ALTER TABLE user_follow_audit_log AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE user_follow AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE user_role AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE user_conversation AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE conversation AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE login_history AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE comment_audit_log AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE comment AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE post_user_tag AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE liked_post AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE saved_post AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE post_media AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE reported_post AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE post_audit_log AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE post AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE notification AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE notification_type AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE message_attachment AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE message AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE attachment_type AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE gender AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe('ALTER TABLE status AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE user_audit_log AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE user AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE report_reason AUTO_INCREMENT = 1;',
    );
    await prisma.$executeRawUnsafe('ALTER TABLE location AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe('ALTER TABLE role AUTO_INCREMENT = 1;');
    await prisma.$executeRawUnsafe(
      'ALTER TABLE action_type AUTO_INCREMENT = 1;',
    );

    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;');

    logger.log(
      '✅ All data deleted and auto-increment counters reset successfully.',
    );
  } catch (error) {
    logger.error('❌ Error while deleting data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
