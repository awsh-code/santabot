/*
  Warnings:

  - You are about to drop the `Coupon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coupon";

-- CreateTable
CREATE TABLE "Coupons" (
    "id" SERIAL NOT NULL,
    "percentage" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "available" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Coupons_pkey" PRIMARY KEY ("id")
);
