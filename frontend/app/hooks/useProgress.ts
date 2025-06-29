'use client'

import { useEffect, useState } from 'react'
import api from '../services/api'

type Progresso = {
  userId: string | null
  salaAtual: number | null
  loading: boolean
}

export function useProgress(): Progresso {
  const [userId, setUserId] = useState<string | null>(null)
  const [salaAtual, setSalaAtual] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrCreateUser = async () => {
      let localId = localStorage.getItem('userId')

      try {
        if (localId) {
          const res = await api.get(`/progress/${localId}`)
          setUserId(localId)
          setSalaAtual(res.data.salaAtual)
        } else {
          const res = await api.post('/start')
          localId = res.data.userId
          localStorage.setItem('userId', localId as string)
          setUserId(localId)
          setSalaAtual(1)
        }
      } catch (err) {
        console.error('Erro ao buscar/iniciar progresso:', err)

        setUserId(null)
        setSalaAtual(null)
      } finally {
        setLoading(false)
      }
    }

    fetchOrCreateUser()
  }, [])

  return { userId, salaAtual, loading }
}