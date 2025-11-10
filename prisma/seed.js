import { PrismaClient } from "@prisma/client";
import products from "./products.json" with { type: "json" };
import prices from "./priceList.json" with { type: "json" };
import mediaItems from "./blog.json" with { type: "json" };

const prisma = new PrismaClient();

async function main() {
  // Seed products
    await prisma.product.createMany({
      data: products,
      skipDuplicates:true
    });

  // Seed prices

    await prisma.priceItem.createMany({
      data: prices,
      skipDuplicates:true
    });
  }
  // Seed blog
  
  await prisma.mediaItem.createMany({
    data: mediaItems,
    skipDuplicates:true
  })

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
