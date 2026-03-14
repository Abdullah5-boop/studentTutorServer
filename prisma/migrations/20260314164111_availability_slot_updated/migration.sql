/*
  Warnings:

  - Added the required column `subject` to the `AvailabilitySlot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailabilitySlot" ADD COLUMN     "subject" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT[];
