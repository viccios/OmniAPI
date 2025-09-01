-- CreateTable
CREATE TABLE "Alien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ultimateForm" BOOLEAN NOT NULL,
    "species" TEXT NOT NULL,
    "homeWorld" TEXT NOT NULL,
    "ability" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "firstAppearance" TEXT NOT NULL
);
