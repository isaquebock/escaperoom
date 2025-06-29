import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";

const prisma = new PrismaClient();

const awnsers: Record<number, string> = {
  1: "32",
  2: "SERRA",
  3: "SERRAR",
};

export async function startSession(): Promise<User> {
  return await prisma.user.create({ data: { salaAtual: 1 } });
}

export async function getProgressFromPrisma(userId: string): Promise<User | null> {
    if (!userId) return null;
    return await prisma.user.findUnique({ where: { id: userId } });
}

export async function respondChallenge(userId: string, room: number, awnser: string): Promise<RespondChallengeResult> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.salaAtual !== room) return { authorized: false };

  const rightAwnser = awnser.toUpperCase() === awnsers[room];

  if (!rightAwnser) 
    return { authorized: true, rightAwnser: false };

  await prisma.user.update({
    where: { id: userId },
    data: { salaAtual: room + 1 },
  });

  return { authorized: true, rightAwnser: true };
}