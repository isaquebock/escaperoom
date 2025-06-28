'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useProgress } from './hooks/useProgress'

export default function HomePage() {
  const router = useRouter()
  const { salaAtual, loading } = useProgress()

  useEffect(() => {
    if (!loading && salaAtual) {
      router.push(`/sala/${salaAtual}`)
    }
  }, [loading, salaAtual, router])

  return <p>Carregando...</p>
}