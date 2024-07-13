/*
  Warnings:

  - You are about to drop the column `dispoaslId` on the `archive` table. All the data in the column will be lost.
  - Added the required column `disposalId` to the `Archive` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `archive` DROP FOREIGN KEY `Archive_dispoaslId_fkey`;

-- AlterTable
ALTER TABLE `archive` DROP COLUMN `dispoaslId`,
    ADD COLUMN `disposalId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Archive` ADD CONSTRAINT `Archive_disposalId_fkey` FOREIGN KEY (`disposalId`) REFERENCES `Disposal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
