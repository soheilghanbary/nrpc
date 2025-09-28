'use client'
import { useQuery } from '@tanstack/react-query'
import { orpc } from '@/lib/api'

export const MessageClient = () => {
  const { data, isPending } = useQuery(orpc.hello.queryOptions())

  if (isPending) return <div>Loading...</div>

  return (
    <div>
      <p className="text-xs">Client Response</p>
      <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
