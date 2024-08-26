import db from "@repo/db/client";
import { AddMoney } from "../../../../components/AddMoneyCard";
import { BalanceCard } from "../../../../components/BalanceCard";
import { OnRampTransactions } from "../../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { Cover } from "../../../../components/ui/cover";

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await db.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await db.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    //@ts-ignore
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function () {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return (
        <div className="flex flex-col h-screen px-4 py-6 mt-20 md:px-8 md:py-12">
            <div className="mb-8 md:mb-12 mt-8 md:mt-12">
                <h1 className="bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-xl md:text-4xl text-transparent">
                    Quickly top up your wallet for 
                    <Cover> smooth transactions.</Cover>
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <AddMoney />
                </div>
                <div className="space-y-6">
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
}
