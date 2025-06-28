'use client'

import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'
import { responderDesafio } from '@/app/hooks/useResponder'

export default function FirstRoom() {
  const router = useRouter()
  const { numero } = useParams()
  const numeroInt = parseInt(numero as string)
  const [resposta, setResposta] = useState('')
  const [feedback, setFeedback] = useState('')
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null

  const handleSend = async () => {
    if (!userId) return;
    const result = await responderDesafio(userId, numeroInt,  resposta)
    if (!result.autorizado) {
      setFeedback('Acesso negado.')
    } else if (result.correta) {
      router.push(numeroInt === 3 ? '/sucesso' : `/sala/${numeroInt + 1}`)
    } else {
      setFeedback('Resposta incorreta. Tente novamente.')
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Digite sua resposta"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />
        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleSend()}>
          Enviar
        </button>
        {feedback && <p className="text-sm text-red-500">{feedback}</p>}
      </div>
    </div>
  )
}