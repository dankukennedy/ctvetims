/*
  Warnings:

  - You are about to drop the column `deviceId` on the `allocation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[embossedCode]` on the table `Receiving` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serialOnAllocate` to the `Allocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialOnTransfer` to the `Transfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `allocation` DROP FOREIGN KEY `Allocation_deviceId_fkey`;

-- AlterTable
ALTER TABLE `allocation` DROP COLUMN `deviceId`,
    ADD COLUMN `serialOnAllocate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transfer` ADD COLUMN `serialOnTransfer` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Receiving_embossedCode_key` ON `Receiving`(`embossedCode`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Allocation` ADD CONSTRAINT `Allocation_serialNo_fkey` FOREIGN KEY (`serialNo`) REFERENCES `Receiving`(`serialNo`) ON DELETE RESTRICT ON UPDATE CASCADE;
