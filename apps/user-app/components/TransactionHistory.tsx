import { Card } from "@repo/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";



async function getTransactions() {
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    })
    return transactions;
}


export default async function () {
    const transactions = await getTransactions()
    console.log("For changes");
    return (
        <div className="w-4/5 mx-auto">
            <Card title="Recent transactions ">
                <div className="max-h-80 overflow-y-auto scroll-smooth">
                    {
                        transactions.reverse().map(t =>
                            <div className="flex justify-between pt-3 pb-1 border-b border-[#b4bfcf]">
                                <div>
                                    <div className="text-sm">
                                        Received INR
                                    </div>
                                    <div className="text-slate-600 text-xs ">
                                        {t.timeStamp.toDateString()}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-x-3">
                                    <span className={`bg-green-400 text-xs rounded-md p-1 cursor-pointer`}>
                                        Success
                                    </span>
                                    <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Card>
        </div>
    )
}