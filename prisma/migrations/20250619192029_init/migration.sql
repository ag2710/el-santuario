/*
  Warnings:

  - You are about to drop the `Creature` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Creature";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Criatura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "entrenado" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Criatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
