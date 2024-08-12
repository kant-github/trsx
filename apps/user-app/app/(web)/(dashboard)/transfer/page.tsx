import db from "@repo/db/client"
import { AddMoney } from "../../../../components/AddMoneyCard";
import { BalanceCard } from "../../../../components/BalanceCard";
import { OnRampTransactions } from "../../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

async function getBalance() {
    const session = await getServerSession(authOptions);
    console.log(db);
    console.log("session is ------------------------------------------>",session);
    const balance = await db.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    console.log("balance is ------------------------------------------->", balance)
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

export default async function() {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return <>
        <div className="text-4xl text-[#6a51a6] p-8 mb-8 font-bold">
            Transfer
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
    </>
}