import { os } from '@orpc/server'

export const router = {
  hello: os.handler(async () => {
    return { message: 'Hello World!' }
  }),
}
