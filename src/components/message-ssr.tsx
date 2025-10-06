import { api } from '@/rpc/orpc.client'

export const MessageSSR = async () => {
  const response = await api.sayHello()
  return (
    <div>
      <span className="font-medium text-xs">Server-Side Response</span>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}
