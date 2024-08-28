/*
  Warnings:

  - You are about to drop the column `menuId` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Cocktail` DROP FOREIGN KEY `Cocktail_menuId_fkey`;

-- AlterTable
ALTER TABLE `Cocktail` DROP COLUMN `menuId`;

-- DropTable
DROP TABLE `Menu`;
