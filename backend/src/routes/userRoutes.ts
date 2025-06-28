import { Router, Request, Response } from "express";
import {
  iniciarSessao,
  obterProgresso,
  responderDesafio,
} from "../services/userService";

const router = Router();

router.post("/iniciar", async (req: Request, res: Response) => {
  const user = await iniciarSessao();
  res.json({ userId: user.id });
});

router.get("/progresso/:userId", async (req: Request, res: Response) => {
  const user = await obterProgresso(req.params.userId);
  if (!user) res.status(404).json({ erro: "Usuário não encontrado" });

  res.json({ salaAtual: user?.salaAtual });

});

router.post("/responder", async (req: Request, res: Response) => {
  const { userId, sala, resposta } = req.body;
  const resultado = await responderDesafio(userId, sala, resposta);
  if (!resultado.autorizado) res.status(403).json({ erro: "Acesso negado" });

  res.json(resultado);
});

export default router;