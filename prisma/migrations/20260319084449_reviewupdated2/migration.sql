/*
  Warnings:

  - You are about to drop the column `bookingId` on the `Review` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Review_bookingId_key";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "bookingId";
