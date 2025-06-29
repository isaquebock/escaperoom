import api from '../services/api'

export async function responderDesafio(userId: string, sala: number, resposta: string) {
  try {
    const res = await api.post('/respond', { userId, sala, resposta })
    return res.data
  } catch (err) {
    console.error('Erro ao responder desafio:', err)
    return { autorizado: false, correta: false }
  }
}