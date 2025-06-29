'use client'

import { useRouter } from 'next/navigation'
import { useProgress } from './hooks/useProgress'

export default function HomePage() {
  const router = useRouter()
  const { salaAtual, loading } = useProgress()

  const handleStart = () => {
    if (salaAtual) {
      router.push(`/sala/${salaAtual}`)
    } else {
      router.push('/sala/1')
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center relative min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className=' mb-12  tracking-widest animate-bounce-smooth flex flex-col justify-center items-center' style={{ animationDuration: '2.5s' }}>
          <h1
            className="text-5xl md:text-9xl font-bold text-whitetext-center drop-shadow-lg"

          >
            ESCAPE ROOM
          </h1>
          <h3 className='text-3xl '>MARCENEIRO EDITION</h3>
        </div>
        <button
          onClick={handleStart}
          disabled={loading}
          className="bg-pink-700 hover:bg-pink-500 cursor-pointer px-8 py-4 text-2xl rounded-lg transition disabled:opacity-60"
        >
          {loading ? 'Carregando...' : 'Iniciar'}
        </button>
      </div>
    </div>
  )
}