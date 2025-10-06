import Link from 'next/link'
import { Suspense } from 'react'
import { ModeToggle } from '@/components/common/mode-toggle'
import { MessageCSR } from '@/components/message-csr'
import { MessageSSR } from '@/components/message-ssr'
import { buttonVariants } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { siteConfig } from '@/config/site'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/nrpc'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} NRPC Stack ${siteConfig.v} - Soheil Ghanbary`

export default () => {
  return (
    <div className="grid h-svh w-svw place-items-center p-4">
      <div className="grid animate-duration-700 animate-fade-up gap-4 sm:grid-cols-2">
        <section className="flex max-w-sm flex-col gap-3 rounded-xl border p-4 shadow-xs">
          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>
          <h1 className="text-center font-bold text-2xl">
            {siteConfig.description} 🚀
          </h1>
          <Link href={GITHUB_REPO_URL} className={buttonVariants()}>
            Get Started
          </Link>
          <span className="text-foreground/85 text-xs">{COPYRIGHT_TEXT}</span>
        </section>
        <section className="flex w-full max-w-sm flex-col justify-around rounded-xl border p-4 shadow-xs">
          <MessageCSR />
          <Suspense fallback={<Spinner className="mx-auto my-4" />}>
            <MessageSSR />
          </Suspense>
        </section>
      </div>
      <footer></footer>
    </div>
  )
}
