/*
  Warnings:

  - You are about to drop the column `vender` on the `receiving` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `receiving` DROP COLUMN `vender`,
    ADD COLUMN `vendor` VARCHAR(191) NULL,
    MODIFY `type` VARCHAR(191) NULL;
