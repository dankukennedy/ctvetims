/*
  Warnings:

  - Added the required column `price` to the `Receiving` table without a default value. This is not possible if the table is not empty.
  - Made the column `manufacturer` on table `receiving` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model` on table `receiving` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `receiving` ADD COLUMN `embossedCode` VARCHAR(191) NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    MODIFY `manufacturer` VARCHAR(191) NOT NULL,
    MODIFY `model` VARCHAR(191) NOT NULL;
