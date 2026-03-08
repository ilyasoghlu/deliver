import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

// Load JSON files
const products = JSON.parse(fs.readFileSync("./prisma/products.json", "utf-8"));
const prices = JSON.parse(fs.readFileSync("./prisma/priceList.json", "utf-8"));
const mediaItems = JSON.parse(fs.readFileSync("./prisma/blog.json", "utf-8"));
const ourTeam = JSON.parse(fs.readFileSync("./prisma/ourTeam.json", "utf-8"));
const serviceBlog = JSON.parse(fs.readFileSync("./prisma/serviceBlog.json", "utf-8"));
const serviceInfo = JSON.parse(fs.readFileSync("./prisma/serviceInfo.json", "utf-8"));

async function main() {
  // Flat tables (safe with createMany)
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
  
  await prisma.serviceBlogItem.createMany({
    data: serviceBlog,
    skipDuplicates: true,
  });

  await prisma.priceItem.createMany({
    data: prices,
    skipDuplicates: true,
  });

  await prisma.mediaItem.createMany({
    data: mediaItems,
    skipDuplicates: true,
  });

  await prisma.serviceInfo.createMany({
    data: serviceInfo,
    skipDuplicates: true,
  });

console.log("DATABASE_URL:", process.env.DATABASE_URL);


  // ! Relational data (must use create)
  for (const member of ourTeam) {
    await prisma.ourTeam.create({
      data: {
        firstName: member.firstName,
        lastName: member.lastName,
        position: member.position,
        description: member.description,
        image: member.image,
        clerkId: member.clerkId ?? "",

        experiences: {
          create: member.experiences ?? [],
        },

        projects: {
          create: member.projects ?? [],
        },

        skills: {
          create: member.skills ?? [],
        },
      },
    });
  }
}

main()
  .then(async () => {
    console.log("Seeding completed successfully! ✅");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
