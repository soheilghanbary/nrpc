import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { ModeToggle } from '@/components/common/mode-toggle'
import { MessageClient } from '@/components/message-client'
import { MessageServer } from '@/components/message-server'
import { OAuthBtn } from '@/components/oauth-btn'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Home',
}

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/nrpc'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} nRPC Stack - Soheil Ghanbary`

export default async () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-6">
      <section className="flex max-w-sm animate-duration-700 animate-fade-up flex-col gap-3">
        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>
        <h1 className="text-center font-extrabold text-xl tracking-tight md:text-3xl">
          nRPC Stack 🚀
        </h1>
        <p className="text-center text-foreground/85 text-sm/5">
          {siteConfig.description}
        </p>
        <Link href={GITHUB_REPO_URL} className={buttonVariants()}>
          Get Started
        </Link>
        <span className="text-foreground/85 text-xs">{COPYRIGHT_TEXT}</span>
        <OAuthBtn />
        {/* Client Component */}
        <MessageClient />
        {/* Server Component */}
        <Suspense fallback={<div>Loading...</div>}>
          <MessageServer />
        </Suspense>
      </section>
    </div>
  )
}
