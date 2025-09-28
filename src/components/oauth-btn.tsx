'use client'
import { signIn } from '@/lib/api'
import { Button } from './ui/button'

export const OAuthBtn = () => {
  return (
    <Button onClick={async () => await signIn.social({ provider: 'google' })}>
      Sign In with Google
    </Button>
  )
}
