'use client'

import { useProgress } from '@/app/hooks/useProgress'
import FirstRoom from '@/app/components/FirstRoom'
import SecondRoom from '@/app/components/SecondRoom'
import ThirdComponent from '@/app/components/ThirdComponent'

const roomComponents: Record<number, React.ComponentType> = {
  1: FirstRoom,
  2: SecondRoom,
  3: ThirdComponent,
}

export default function Page() {
  const progress = useProgress();

  const RoomComponent = progress?.salaAtual ? roomComponents[progress.salaAtual] : undefined;

  if (RoomComponent) {
    return <RoomComponent />;
  }

  return <p>Erro ao carregar a página</p>;
}