import { Cover } from "../../../../../components/ui/cover";
import { authOptions } from "../../../../lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import TransactionHistory from "../../../../../components/TransactionHistory";
import { BalanceCard } from "../../../../../components/BalanceCard";

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    })
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function () {
    const balance = await getBalance();
    return (
        <div className="mt-20 mx-20 h-[86vh]">
            <h1 className="pb-12 bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-4xl text-transparent md:mb-4 md:text-5xl">See all your<Cover>peer-2-peer</Cover>Transactions here
            </h1>
            <div className="w-1/2 ml-32">
                <BalanceCard amount={balance.amount} locked={balance.locked} />
            </div>
            <div className="mt-10">
                <TransactionHistory />
            </div>
        </div>
    )
}