/*
  Warnings:

  - You are about to drop the column `productItemId` on the `CartItem` table. All the data in the column will be lost.
  - Added the required column `productVariantId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productItemId_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "productItemId",
ADD COLUMN     "productVariantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
