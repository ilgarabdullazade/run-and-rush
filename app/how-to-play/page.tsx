import type { Metadata } from 'next/types'

import { titleMerge } from '@/configs/seoConfig'

import HowToPlayView from '@/views/HowToPlay'

export const metadata: Metadata = {
  title: titleMerge('How to play'),
  description: 'Generated by create next app',
}

export default function HowToPlay() {
  return <HowToPlayView />
}
