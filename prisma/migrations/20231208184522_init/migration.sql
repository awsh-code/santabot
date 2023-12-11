-- DropIndex
DROP INDEX "Addresses_user_id_key";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;
