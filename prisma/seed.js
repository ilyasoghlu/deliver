import { PrismaClient } from "@prisma/client";
import products from "./products.json" with { type: "json" };
import prices from "./priceList.json" with { type: "json" };

const prisma = new PrismaClient();

async function main() {
  // Seed products
  for (const product of products) {
    await prisma.product.createMany({
      data: product,
      skipDuplicates:true
    });
  }

  // Seed prices
  for (const price of prices) {
    await prisma.price.createMany({
      data: price,
      skipDuplicates:true
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
