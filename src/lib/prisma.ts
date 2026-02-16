import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'

import path from 'path'

const prismaClientSingleton = () => {
    const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')
    const adapter = new PrismaBetterSqlite3({ url: dbPath })
    return new PrismaClient({
        adapter,
        log: ['query', 'info', 'warn', 'error']
    })
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
