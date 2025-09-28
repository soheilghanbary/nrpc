import { client } from '@/lib/api'

export const MessageServer = async () => {
  const data = await client.hello()
  return (
    <div>
      <p className="text-xs">Server Response</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
