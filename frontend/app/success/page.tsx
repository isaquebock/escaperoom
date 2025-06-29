'use client'

import { useRouter } from 'next/navigation'

export default function SucessoPage() {
  const router = useRouter()

  const handleRestart = () => {
    localStorage.removeItem('userId')
    router.replace('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center">
        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2" className="mb-4">
          <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" fill="#d1fae5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
        </svg>
        <h1 className="text-3xl font-bold text-green-700 mb-2">Parabéns!</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Você completou o Escape Room com sucesso.<br/>Obrigado por jogar!</p>
        <button onClick={handleRestart} className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Jogar novamente
        </button>
      </div>
    </div>
  )
}