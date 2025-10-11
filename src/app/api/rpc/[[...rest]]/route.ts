import { RPCHandler } from '@orpc/server/fetch'
import { router } from '@/rpc/router'
import { CORSPlugin } from '@orpc/server/plugins'

export const handler = new RPCHandler(router, {
  plugins: [
    new CORSPlugin({
      origin: (origin, options) => origin,
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
      // ...
    }),
  ],
})

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    prefix: '/api/rpc',
    context: {}, // Provide initial context if needed
  })

  return response ?? new Response('Not found', { status: 404 })
}

export const HEAD = handleRequest
export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const PATCH = handleRequest
export const DELETE = handleRequest
