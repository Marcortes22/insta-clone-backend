/*
  Warnings:

  - You are about to alter the column `ip_address` on the `login_history` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(150)`.
  - You are about to alter the column `device` on the `login_history` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE `login_history` MODIFY `ip_address` VARCHAR(150) NULL,
    MODIFY `device` VARCHAR(150) NULL;
