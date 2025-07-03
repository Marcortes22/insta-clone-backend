-- CreateTable
CREATE TABLE `action_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attachment_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(1000) NOT NULL,
    `parent_commnet_id` INTEGER NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_At` TIMESTAMP(0) NULL,
    `post_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_comment`(`post_id`),
    INDEX `FK_user_TO_comment`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment_audit_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `made_by` INTEGER NOT NULL,
    `old_data` JSON NULL,
    `new_data` JSON NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `action_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_action_type_TO_comment_audit_log`(`action_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_group` BOOLEAN NOT NULL,
    `created_At` TIMESTAMP(0) NOT NULL,
    `deleted_At` TIMESTAMP(0) NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gender` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liked_post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL,
    `post_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_liked_post`(`post_id`),
    INDEX `FK_user_TO_liked_post`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `latitude` DECIMAL(10, 0) NOT NULL,
    `longitude` DECIMAL(10, 0) NOT NULL,
    `address` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `made_by` INTEGER NOT NULL,
    `ip_address` VARCHAR(255) NULL,
    `device` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `action_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_action_type_TO_login_history`(`action_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(1000) NOT NULL,
    `read_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `conversation_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_conversation_TO_message`(`conversation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message_attachment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `attachment_url` VARCHAR(2083) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `attachment_type_id` INTEGER NOT NULL,
    `message_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_attachment_type_TO_message_attachment`(`attachment_type_id`),
    INDEX `FK_message_TO_message_attachment`(`message_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` VARCHAR(1000) NOT NULL,
    `is_read` BOOLEAN NOT NULL,
    `type_id` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `notification_type_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_notification_type_TO_notification`(`notification_type_id`),
    INDEX `FK_user_TO_notification`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(500) NULL,
    `is_archived` BOOLEAN NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `user_id` INTEGER NOT NULL,
    `location_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_location_TO_post`(`location_id`),
    INDEX `FK_user_TO_post`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_audit_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `made_by` INTEGER NOT NULL,
    `old_data` JSON NULL,
    `new_data` JSON NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `action_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_action_type_TO_post_audit_log`(`action_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(2083) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `post_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_post_media`(`post_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_user_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_At` TIMESTAMP(0) NOT NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `post_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_post_user_tag`(`post_id`),
    INDEX `FK_user_TO_post_user_tag`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report_reason` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` VARCHAR(500) NOT NULL,
    `description` VARCHAR(500) NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reported_post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(500) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `report_reason_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `post_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_reported_post`(`post_id`),
    INDEX `FK_report_reason_TO_reported_post`(`report_reason_id`),
    INDEX `FK_user_TO_reported_post`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saved_post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `post_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_post_TO_saved_post`(`post_id`),
    INDEX `FK_user_TO_saved_post`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `bio` VARCHAR(500) NULL,
    `profile_picture_url` VARCHAR(2083) NULL,
    `webside_url` VARCHAR(2083) NULL,
    `is_privated` BOOLEAN NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `status_id` INTEGER NOT NULL,
    `gender_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    UNIQUE INDEX `UQ_email`(`email`),
    INDEX `FK_gender_TO_user`(`gender_id`),
    INDEX `FK_status_TO_user`(`status_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_audit_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `made_by` INTEGER NOT NULL,
    `old_data` JSON NULL,
    `new_data` JSON NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `action_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_action_type_TO_user_audit_log`(`action_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_conversation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL,
    `usser_id` INTEGER NOT NULL,
    `conversation_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_is`(`id`),
    INDEX `FK_conversation_TO_user_conversation`(`conversation_id`),
    INDEX `FK_user_TO_user_conversation`(`usser_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_follow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL,
    `follower_id` INTEGER NOT NULL,
    `followed_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_user_TO_user_follow`(`follower_id`),
    INDEX `FK_user_TO_user_follow1`(`followed_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_follow_audit_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `made_by` INTEGER NOT NULL,
    `follower_id` INTEGER NOT NULL,
    `followed` INTEGER NOT NULL,
    `old_data` JSON NULL,
    `new_data` JSON NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `action_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_action_type_TO_user_follow_audit_log`(`action_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL,
    `role_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `UQ_id`(`id`),
    INDEX `FK_role_TO_user_role`(`role_id`),
    INDEX `FK_user_TO_user_role`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `FK_post_TO_comment` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `FK_user_TO_comment` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comment_audit_log` ADD CONSTRAINT `FK_action_type_TO_comment_audit_log` FOREIGN KEY (`action_type_id`) REFERENCES `action_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `liked_post` ADD CONSTRAINT `FK_post_TO_liked_post` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `liked_post` ADD CONSTRAINT `FK_user_TO_liked_post` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `login_history` ADD CONSTRAINT `FK_action_type_TO_login_history` FOREIGN KEY (`action_type_id`) REFERENCES `action_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `FK_conversation_TO_message` FOREIGN KEY (`conversation_id`) REFERENCES `conversation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message_attachment` ADD CONSTRAINT `FK_attachment_type_TO_message_attachment` FOREIGN KEY (`attachment_type_id`) REFERENCES `attachment_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message_attachment` ADD CONSTRAINT `FK_message_TO_message_attachment` FOREIGN KEY (`message_id`) REFERENCES `message`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `FK_notification_type_TO_notification` FOREIGN KEY (`notification_type_id`) REFERENCES `notification_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `FK_user_TO_notification` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `FK_location_TO_post` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `FK_user_TO_post` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post_audit_log` ADD CONSTRAINT `FK_action_type_TO_post_audit_log` FOREIGN KEY (`action_type_id`) REFERENCES `action_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post_media` ADD CONSTRAINT `FK_post_TO_post_media` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post_user_tag` ADD CONSTRAINT `FK_post_TO_post_user_tag` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `post_user_tag` ADD CONSTRAINT `FK_user_TO_post_user_tag` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reported_post` ADD CONSTRAINT `FK_post_TO_reported_post` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reported_post` ADD CONSTRAINT `FK_report_reason_TO_reported_post` FOREIGN KEY (`report_reason_id`) REFERENCES `report_reason`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reported_post` ADD CONSTRAINT `FK_user_TO_reported_post` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `saved_post` ADD CONSTRAINT `FK_post_TO_saved_post` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `saved_post` ADD CONSTRAINT `FK_user_TO_saved_post` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_gender_TO_user` FOREIGN KEY (`gender_id`) REFERENCES `gender`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_status_TO_user` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_audit_log` ADD CONSTRAINT `FK_action_type_TO_user_audit_log` FOREIGN KEY (`action_type_id`) REFERENCES `action_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_conversation` ADD CONSTRAINT `FK_conversation_TO_user_conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_conversation` ADD CONSTRAINT `FK_user_TO_user_conversation` FOREIGN KEY (`usser_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_follow` ADD CONSTRAINT `FK_user_TO_user_follow` FOREIGN KEY (`follower_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_follow` ADD CONSTRAINT `FK_user_TO_user_follow1` FOREIGN KEY (`followed_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_follow_audit_log` ADD CONSTRAINT `FK_action_type_TO_user_follow_audit_log` FOREIGN KEY (`action_type_id`) REFERENCES `action_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `FK_role_TO_user_role` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `FK_user_TO_user_role` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
