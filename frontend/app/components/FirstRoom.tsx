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
    <div className="mx-auto min-h-screen flex justify-center">
      <div className='self-end w-1/2 flex justify-end'>
        <img
          src="/images/character.png"
          alt="A character stands beside a workbench in a softly lit room, appearing thoughtful and focused. The background suggests a cozy workshop with wooden shelves and scattered tools, creating a calm and studious atmosphere."
          className="w-lg h-vh"
        />
      </div>
      <div className='w-1/2 flex flex-col justify-center bg-black/70 p-8 mx-4 self-center h-fit'>
        <h2 className='text-4xl '>Desafio 1</h2>
        <p>Sobre a bancada central, há um projeto inacabado de uma estante modular, com um bilhete amarelado:
        </p>
        <p className='bg-amber-50 my-2 p-2 leading-5 text-yellow-900 rounded-2xl'>“Para cada novo módulo que produzo, dobro a quantidade de tábuas usadas no anterior.
          O primeiro módulo usou 2 tábuas.
          Quantas tábuas serão necessárias para o quinto módulo?”
        </p>
        <p>
          Ao lado, há uma pilha de tábuas numeradas e uma ficha de produção com os dados:
        </p>
        <span>Módulo 1: 2 tábuas</span>
        <span>Módulo 2: 4 tábuas</span>
        <span>Módulo 3: 8 tábuas</span>
        <span>Módulo 4: 16 tábuas</span>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border p-2 rounded mt-7"
            placeholder="Digite sua resposta"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
          />
          <button type="button" className=" bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleSend()}>
            Enviar
          </button>
          {feedback && <p className="text-sm text-red-500">{feedback}</p>}
        </div>
        </div>
    </div>
  )
}