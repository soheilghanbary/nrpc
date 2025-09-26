import 'dotenv/config'
import path from 'node:path'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'server/db/schema.prisma',
  experimental: {
    adapter: true,
    externalTables: true,
    studio: true,
  },
  migrations: {
    path: path.join('db', 'migrations'),
  },
  views: {
    path: path.join('db', 'views'),
  },
  typedSql: {
    path: path.join('db', 'queries'),
  },
})
