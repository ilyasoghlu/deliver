import { PrismaClient } from '@prisma/client';
import  products from './products.json' with{type:"json"}; // Ensure this file exists and is valid
const prisma = new PrismaClient();

async function main() {
    for (const product of products) {
        await prisma.product.create({
            data: product // ✅ Correctly passing the product data
        });
    }
}

main()
    .then(async () => {
        console.log('Seeding completed successfully! ✅');
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Error seeding database:', e);
        await prisma.$disconnect();
        process.exit(1);
    });