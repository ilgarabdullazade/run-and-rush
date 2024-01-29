import type { Metadata } from 'next/types'

import { titleMerge } from '@/configs/seoConfig'

import WhitepaperView from '@/views/Whitepaper'

export const metadata: Metadata = {
  title: titleMerge('Whitepaper'),
  description: 'Generated by create next app',
}

export default function Home() {
  return <WhitepaperView />
}
