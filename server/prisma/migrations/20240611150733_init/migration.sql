/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Receiving` (
    `id` VARCHAR(191) NOT NULL,
    `serialNo` VARCHAR(191) NOT NULL,
    `manufacturer` VARCHAR(191) NULL,
    `model` VARCHAR(191) NULL,
    `vender` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `registeredUserId` VARCHAR(191) NOT NULL,
    `purchaseById` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Receiving_serialNo_key`(`serialNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Receiving` ADD CONSTRAINT `Receiving_registeredUserId_fkey` FOREIGN KEY (`registeredUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receiving` ADD CONSTRAINT `Receiving_purchaseById_fkey` FOREIGN KEY (`purchaseById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
