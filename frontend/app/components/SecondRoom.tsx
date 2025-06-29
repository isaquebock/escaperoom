'use client'

import { useEffect, useState } from 'react'
import { responderDesafio } from '@/app/hooks/useResponder'
import { useRouter } from 'next/navigation'

const TOOLS = ['MARTELO', 'PARAFUSADEIRA', 'SERRA']

export default function SecondRoom() {
  const [resposta, setResposta] = useState('')
  const [feedback, setFeedback] = useState('')
  const [showTools, setShowTools] = useState(true)
  const router = useRouter()
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null

  useEffect(() => {
    const timer = setTimeout(() => setShowTools(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return

    const result = await responderDesafio(userId, 2, resposta)

    if (!result.autorizado) {
      setFeedback('Acesso negado.')
    } else if (result.correta) {
      router.push('/sala/3')
    } else {
      setFeedback('Resposta incorreta. Tente novamente.')
    }
  }

  return (
    <div className="mx-auto min-h-screen flex justify-center">
      <div className='mr-4 self-end'>
        <img
          src="/images/character.png"
          alt="A character stands beside a workbench in a softly lit room, appearing thoughtful and focused. The background suggests a cozy workshop with wooden shelves and scattered tools, creating a calm and studious atmosphere."
          className="w-lg h-vh"
        />
      </div>
      <div className='flex flex-col justify-center w-1/2 bg-black/70 p-8 mx-4 self-center h-fit'>
        <h2 className='text-4xl '>Desafio 2</h2>
        {showTools ? (
          <div className="flex gap-2 mb-4">
            {TOOLS.map((cor, i) => (
              <div key={i} className={`w-20 h-20 rounded text-white flex items-center justify-center`} style={{ backgroundColor: cor.toLowerCase() }}>
                {cor}
              </div>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-md text-gray-400">
              Na produção de um móvel, cada ferramenta tem seu momento.
              Memória e precisão constroem a excelência.

              Nós acabamos de te mostrar três ferramentas diferentes.
            </p>
            <p className="text-lg text-white mb-2">Qual foi a terceira ferramenta que apareceu?</p>
            <input
              type="text"
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              className="border p-2 rounded"
              placeholder="Digite a sequência"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Enviar
            </button>
            {feedback && <p className="text-red-500">{feedback}</p>}
          </form>
        )}
      </div>
    </div>
  )
}