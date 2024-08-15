"use server"
import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"


export async function p2pTransfer(number: string, amount: number) {
    const session = await  getServerSession(authOptions);
    const fromUser = session?.user?.id
    const toUser = await prisma.user.findFirst({
        where: {
            number: number
        }
    })
    if(!toUser) {
        return {
            message: "User not found"
        }
    }

    await prisma.$transaction(async(tsx) => {
        const fromBalance = await tsx.balance.findUnique({
            where: {
                userId: Number(fromUser)
            },
        })
        if(!fromBalance || fromBalance.amount < amount) {
            return {
                message: "Insufficient balance"
            }
        }
        await tsx.balance.update({
            where: {
                userId: Number(fromUser)
            },
            data: {
                amount: {decrement: amount}
            }
        })
        await tsx.balance.update({
            where: {
                userId: Number(toUser.id)
            },
            data: {
                amount: {increment: amount}
            }
        })
    })

}