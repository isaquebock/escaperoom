'use client'

import { useProgress } from '@/app/hooks/useProgress'
import FirstRoom from '@/app/components/FirstRoom'
import SecondRoom from '@/app/components/SecondRoom'
import ThirdComponent from '@/app/components/ThirdComponent'

export default function SalaPageClient() {
  const progress = useProgress();

  if (progress && progress.salaAtual) {
    console.log('Progresso:', progress);
  }

  switch(progress?.salaAtual) {
    case 1:
      return <FirstRoom />
    case 2:      
      return <SecondRoom />
    case 3:      
      return <ThirdComponent />
    default:
      console.log('Sala desconhecida');
  }
}