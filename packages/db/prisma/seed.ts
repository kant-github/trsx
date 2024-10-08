import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { number: '1111111111' },
        update: {},
        create: {
            number: "1111111111",
            password: await bcrypt.hash("alice123", 10),
            name: "alice",
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },
            OnRampTransacion: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "token__1",
                    provider: "HDFC Bank",
                }
            }
        }
    })
    const bob = await prisma.user.upsert({
        where: { number: "2222222222" },
        update: {},
        create: {
            number: "2222222222",
            password: await bcrypt.hash("bob12345", 10),
            name: "bob",
            Balance: {
                create: {
                    amount: 2000,
                    locked: 0
                }
            },
            OnRampTransacion: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 2000,
                    token: "token__2",
                    provider: "HDFC Bank"
                }
            }
        }
    })
    console.log(alice, bob);
}


main().then(async () => {
    await prisma.$disconnect()
}).catch(async(err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
}) 