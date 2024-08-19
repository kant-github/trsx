"use server"
import prisma from "@repo/db/client"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export async function p2ptransactions() {
    const session = await getServerSession(authOptions);
    if( !session ) {
        return {
            message: "Unauthenticated"
        }
    }

    try {

        const transactions = await prisma.p2pTransfer.findMany({
            where: {
                fromUserId: Number(session.user.id)
            },
        })

        if(transactions) {
            return transactions;
        }

    } catch(err) {
        return {
            message: "Error in finding trsx"
        }
    }

}