import { Router, Request, Response } from "express";
import {
  startSession,
  getProgressFromPrisma,
  respondChallenge,
} from "../services/userService";

const router = Router();

// Health check route to docker-compose
router.get('/', (_, res) => {
  res.status(200).send('Healthy Check')
})

router.post("/start", async (req: Request, res: Response) => {
  const user = await startSession();
  res.json({ userId: user.id });
});

router.get("/progress/:userId", async (req: Request, res: Response) => {
  const user = await getProgressFromPrisma(req.params.userId);
  if (!user) {
    res.status(404).json({ erro: "Usuário não encontrado" });
    return;
  }

  res.json({ salaAtual: user.salaAtual });
});

router.post("/respond", async (req: Request, res: Response) => {
  const { userId, sala, resposta } = req.body;
  const result = await respondChallenge(userId, sala, resposta);
  if (!result.authorized) {
    res.status(403).json({ erro: "Acesso negado" });
    return;
  }

  res.json(result);
});

export default router;