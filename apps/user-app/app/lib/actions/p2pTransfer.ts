"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function p2pTransfer(number: string, amount: number) {
    const session = await getServerSession(authOptions);
    const fromUser = session?.user?.id;

    if (!fromUser) {
        throw new Error("User not authenticated");
    }

    const toUser = await prisma.user.findFirst({
        where: {
            number: number
        }
    });

    if (!toUser) {
        return {
            message: "User not found"
        };
    }

    try {
        await prisma.$transaction(async (tsx) => {

            await tsx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(fromUser)} FOR UPDATE`;
            const fromBalance = await tsx.balance.findUnique({
                where: {
                    userId: Number(fromUser)
                }
            });

            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error("Insufficient Funds");
            }

            await tsx.balance.update({
                where: {
                    userId: Number(fromUser)
                },
                data: {
                    amount: { decrement: amount }
                }
            });

            await tsx.balance.update({
                where: {
                    userId: Number(toUser.id)
                },
                data: {
                    amount: { increment: amount }
                }
            });

            await tsx.p2pTransfer.create({
                data: {
                    fromUserId: Number(fromUser),
                    toUserId: Number(toUser.id),
                    amount: Number(amount),
                    timeStamp: new Date(),
                }
            })
        });
    } catch (error) {
        console.error("Transaction failed: ", error);
        throw error;
    }

    return {
        message: "Transfer completed successfully"
    };
}
