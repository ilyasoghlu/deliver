import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

// Load JSON files
const products = JSON.parse(fs.readFileSync("./prisma/products.json", "utf-8"));
const prices = JSON.parse(fs.readFileSync("./prisma/priceList.json", "utf-8"));
const mediaItems = JSON.parse(fs.readFileSync("./prisma/blog.json", "utf-8"));
const ourTeam = JSON.parse(fs.readFileSync("./prisma/ourTeam.json", "utf-8"));

async function main() {
  await prisma.product.createMany({ data: products, skipDuplicates: true });
  await prisma.priceItem.createMany({ data: prices, skipDuplicates: true });
  await prisma.mediaItem.createMany({ data: mediaItems, skipDuplicates: true });
  await prisma.ourTeam.createMany({ data: ourTeam, skipDuplicates: true });
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
