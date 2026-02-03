import { prisma } from "@/lib/prisma";

export async function getOurTeam() {
  return prisma.ourTeam.findMany({
    include: {
      experiences: true,
      projects: true,
      skills: true,
    },
  });
}

export async function getTeamMember(id: string) {
  return prisma.ourTeam.findUnique({
    where: { id },
    include: {
      experiences: true,
      projects: true,
      skills: true,
    },
  });
}
