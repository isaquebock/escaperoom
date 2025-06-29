import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function iniciarSessao() {
  return await prisma.user.create({ data: { salaAtual: 1 } });
}

export async function obterProgresso(userId: string) {
    if (!userId) return null;
    return await prisma.user.findUnique({ where: { id: userId } });
}

const respostas: Record<number, string> = {
  1: "32",
  2: "SERRA",
  3: "SERRAR",
};

export async function responderDesafio(userId: string, sala: number, resposta: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.salaAtual !== sala) return { autorizado: false };

  const correta = resposta.toUpperCase() === respostas[sala];
  if (!correta) return { autorizado: true, correta: false };

  await prisma.user.update({
    where: { id: userId },
    data: { salaAtual: sala + 1 },
  });

  return { autorizado: true, correta: true };
}