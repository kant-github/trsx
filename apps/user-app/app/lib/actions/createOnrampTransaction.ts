"use server"
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";


export async function createOnRampTransaction(provider: string, amount: number) {
    const session = await getServerSession(authOptions);

    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const token = (Math.random() * 1000).toString();

    await prisma.onRampTransaction.create({
        data: {
            userId: Number(session?.user?.id),
            status: "Processing",
            token: token,
            amount: amount * 100,
            startTime: new Date(),
            provider: provider
        }

    })

    return {
        message: "Done"
    }
}

// id        Int @id @default(autoincrement())
// status    OnRampStatus
// token     String
// provider  String
// amount    Int
// startTime DateTime
// userId    Int
// user      User @relation(fields: [userId], references: [id])