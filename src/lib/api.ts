import { router } from '@/server/router'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import { createAuthClient } from 'better-auth/react'
// auth client
export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_URL,
})
// orpc link
const link = new RPCLink({
  url: `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/rpc`,
  headers: async () => {
    if (typeof window !== 'undefined') {
      return {}
    }

    const { headers } = await import('next/headers')
    return await headers()
  },
})
// orpc client
export const client: RouterClient<typeof router> = createORPCClient(link)
