import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import { createAuthClient } from 'better-auth/react'
import type { router } from '@/server/router'

declare global {
  var $client: RouterClient<typeof router> | undefined
}

// auth client
export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_URL,
})
// orpc link
const link = new RPCLink({
  url: () => {
    if (typeof window === 'undefined') {
      throw new Error('RPCLink is not allowed on the server side.')
    }
    return `${window.location.origin}/rpc`
  },
})
// orpc client
export const client: RouterClient<typeof router> =
  globalThis.$client ?? createORPCClient(link)
// react-query rpc
export const orpc = createTanstackQueryUtils(client)
