import db from "@repo/db/client"
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



    return <div className="mt-32 h-[100vh]">


        <div className="mb-16 mt-40">
            <h1 className="mb-3 bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-4xl text-transparent md:mb-4 md:text-4xl">Quickly top up your wallet for 
                <Cover>  smooth transactions.</Cover>
            </h1>
        </div>


        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoney />
            </div>
            <div>
                <div>
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>

                <div className="pt-4">
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}