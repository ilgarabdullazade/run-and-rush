import type { Metadata } from 'next/types'

import { titleMerge } from '@/configs/seoConfig'

import AccountBalance from '@/views/Account/views/AccountBalance'

export const metadata: Metadata = {
  title: titleMerge('Balance'),
  description: 'Generated by create next app',
}

export default function Balance() {
  return <AccountBalance />
}
