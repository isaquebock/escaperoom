'use client'

import { useEffect, useState } from 'react'
import { responderDesafio } from '../../hooks/useResponder'
import { useRouter } from 'next/navigation'

const CORES = ['AZUL', 'VERMELHO', 'AMARELO']

export default function Sala2() {
  const [resposta, setResposta] = useState('')
  const [feedback, setFeedback] = useState('')
  const [mostrarCores, setMostrarCores] = useState(true)
  const router = useRouter()
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null

  useEffect(() => {
    const timer = setTimeout(() => setMostrarCores(false), 3000)
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
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl mb-4">Sala 2: Teste de memória</h1>

      {mostrarCores ? (
        <div className="flex gap-2 mb-4">
          {CORES.map((cor, i) => (
            <div key={i} className={`w-20 h-20 rounded text-white flex items-center justify-center`} style={{ backgroundColor: cor.toLowerCase() }}>
              {cor}
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p className="text-sm text-gray-600">Digite as cores na ordem correta, tudo junto, sem espaço (ex: AZULVERMELHOAMARELO)</p>
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
  )
}