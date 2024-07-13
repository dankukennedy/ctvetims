-- CreateTable
CREATE TABLE `Allocation` (
    `id` VARCHAR(191) NOT NULL,
    `userDepartment` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `serialNo` VARCHAR(191) NOT NULL,
    `deviceId` VARCHAR(191) NOT NULL,
    `roomNuber` VARCHAR(191) NOT NULL,
    `allocateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transfer` (
    `id` VARCHAR(191) NOT NULL,
    `block` VARCHAR(191) NOT NULL,
    `allocationId` VARCHAR(191) NOT NULL,
    `transferAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SystemAudit` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `transferId` VARCHAR(191) NOT NULL,
    `auditAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Decommission` (
    `id` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `auditId` VARCHAR(191) NOT NULL,
    `decommissionAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disposal` (
    `id` VARCHAR(191) NOT NULL,
    `decommissionId` VARCHAR(191) NOT NULL,
    `desposalAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Archive` (
    `id` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `dispoaslId` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Allocation` ADD CONSTRAINT `Allocation_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Receiving`(`serialNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transfer` ADD CONSTRAINT `Transfer_allocationId_fkey` FOREIGN KEY (`allocationId`) REFERENCES `Allocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SystemAudit` ADD CONSTRAINT `SystemAudit_transferId_fkey` FOREIGN KEY (`transferId`) REFERENCES `Transfer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Decommission` ADD CONSTRAINT `Decommission_auditId_fkey` FOREIGN KEY (`auditId`) REFERENCES `SystemAudit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Disposal` ADD CONSTRAINT `Disposal_decommissionId_fkey` FOREIGN KEY (`decommissionId`) REFERENCES `Decommission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Archive` ADD CONSTRAINT `Archive_dispoaslId_fkey` FOREIGN KEY (`dispoaslId`) REFERENCES `Disposal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
