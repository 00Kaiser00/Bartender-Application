/*
  Warnings:

  - You are about to drop the column `cockTailId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `cocktailName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `cockTailId`,
    ADD COLUMN `cocktailName` VARCHAR(191) NOT NULL;
