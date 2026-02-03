import { PrismaClient } from "@prisma/client";

/**
 * Prevent multiple Prisma instances in development
 * (important for Next.js App Router + hot reload)
 */

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"], // change to ["query", "error"] if you want logs
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
