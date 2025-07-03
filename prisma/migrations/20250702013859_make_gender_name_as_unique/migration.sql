/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `gender` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `gender_name_key` ON `gender`(`name`);
