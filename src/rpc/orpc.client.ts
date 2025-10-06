import { createORPCClient, onError } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import type { router } from './router'

declare global {
  var $client: RouterClient<typeof router> | undefined
}

// orpc link
const link = new RPCLink({
  url: `${process.env.NEXT_PUBLIC_URL}/api/rpc`,
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: 'include',
    })
  },
  interceptors: [
    onError((error) => {
      console.error(error)
    }),
  ],
})

// orpc client
export const api: RouterClient<typeof router> =
  globalThis.$client ?? createORPCClient(link)

// orpc tanstack query utils
export const client = createTanstackQueryUtils(api)
