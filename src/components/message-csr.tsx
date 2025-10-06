'use client'
import { useQuery } from '@tanstack/react-query'
import { client } from '@/rpc/orpc.client'
import { Spinner } from './ui/spinner'

export const MessageCSR = () => {
  const { data, isLoading } = useQuery(client.sayHello.queryOptions())
  if (isLoading) return <Spinner className="mx-auto my-4" />
  return (
    <div>
      <span className="font-medium text-xs">Client-Side Response</span>
      <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
