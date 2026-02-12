-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clerkId" UUID NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceItem" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER,
    "priceNote" TEXT,
    "design" TEXT NOT NULL,
    "pages" TEXT NOT NULL,
    "admin" BOOLEAN,
    "description" TEXT NOT NULL,
    "support" BOOLEAN NOT NULL,
    "contact" BOOLEAN NOT NULL,
    "basicSeo" BOOLEAN,
    "advancedSeo" BOOLEAN,
    "functions" BOOLEAN,
    "clerkId" UUID,

    CONSTRAINT "PriceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItem" (
    "id" UUID NOT NULL,
    "mediaFile" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "newsType" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "commentNumber" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clerkId" UUID NOT NULL,

    CONSTRAINT "MediaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OurTeam" (
    "id" UUID NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "OurTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT,
    "personId" UUID NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "projectInfo" TEXT NOT NULL,
    "projectLink" TEXT,
    "personId" UUID NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" UUID NOT NULL,
    "title" TEXT,
    "personId" UUID NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceBlogItem" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ServiceBlogItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_personId_idx" ON "Project"("personId");

-- CreateIndex
CREATE INDEX "Skill_personId_idx" ON "Skill"("personId");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_personId_fkey" FOREIGN KEY ("personId") REFERENCES "OurTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_personId_fkey" FOREIGN KEY ("personId") REFERENCES "OurTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_personId_fkey" FOREIGN KEY ("personId") REFERENCES "OurTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
