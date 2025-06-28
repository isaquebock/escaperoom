'use client'

import { useState } from 'react'
import { responderDesafio } from '../../hooks/useResponder'
import { useRouter } from 'next/navigation'

export default function Sala3() {
  const [resposta, setResposta] = useState('')
  const [feedback, setFeedback] = useState('')
  const router = useRouter()
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return

    const result = await responderDesafio(userId, 3, resposta)

    if (!result.autorizado) {
      setFeedback('Acesso negado.')
    } else if (result.correta) {
      router.push('/sucesso')
    } else {
      setFeedback('Resposta incorreta. Tente novamente.')
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl">Sala 3: Enigma final</h1>
      <div className="bg-stone-100 p-4 rounded shadow text-black">
        <p>
          “Querido explorador,  
          <br />
          O caminho foi longo, mas falta pouco.  
          <br />
          Onde estiver o seu <strong>tesouro</strong>, ali estará seu coração.  
          <br />
          A palavra-chave está entre as linhas. Preste atenção.”
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Digite a palavra-chave"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Escapar!
        </button>
        {feedback && <p className="text-red-500">{feedback}</p>}
      </form>
    </div>
  )
}