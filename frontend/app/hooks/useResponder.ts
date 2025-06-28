import api from '../services/api'

export async function responderDesafio(userId: string, sala: number, resposta: string) {
  try {
    const res = await api.post('/responder', { userId, sala, resposta })
    return res.data // { autorizado: true, correta: true }
  } catch (err) {
    console.error('Erro ao responder desafio:', err)
    return { autorizado: false, correta: false }
  }
}