'use client'

import { useState } from 'react'
import { responderDesafio } from '@/app/hooks/useResponder'
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
      router.push('/success')
    } else {
      setFeedback('Resposta incorreta. Tente novamente.')
    }
  }

  return (
    <div className="mx-auto min-h-screen flex justify-center">
      <div className='self-end w-1/2 flex justify-end'>
        <img
          src="/images/character.png"
          alt="A character stands beside a workbench in a softly lit room, appearing thoughtful and focused. The background suggests a cozy workshop with wooden shelves and scattered tools, creating a calm and studious atmosphere."
          className="w-lg h-vh"
        />
      </div>
      <div className="p-8 max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl">Sala 3: Enigma final</h1>
        <p>
          Ao entrar na última sala, você encontra uma bancada antiga com uma carta cuidadosamente dobrada sobre um pedaço de madeira nobre. O papel está envelhecido, escrito à mão, com a caligrafia firme de alguém experiente no ofício.
          <br />
          Você a abre e lê:
        </p>
        <div className="bg-stone-100 p-4 rounded shadow text-black">
          <p>
            Após anos entre serragem, pregos e projetos, você chegou ao fim da jornada.
            <br />
            Toda grande peça começa com o mesmo gesto:
            não é parafusar, nem lixar, nem pregar.
            <br />
            É o corte que dá forma à ideia.
            <br />
            O barulho que mais conhecemos… aquele que inicia tudo.
            <br />
            A palavra-chave está entre as linhas.
            <br />
            Mostre que você compreendeu o coração do ofício.”
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
    </div>
  )
}