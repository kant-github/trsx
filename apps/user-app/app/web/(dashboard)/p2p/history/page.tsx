import { Cover } from "../../../../../components/ui/cover";
import { authOptions } from "../../../../lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { Card } from "@repo/ui/card";


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
    console.log(transactions);
    return (
        <div className="mt-20 mx-16 h-[78vh]">
            <h1 className="pb-12 bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-4xl text-transparent md:mb-4 md:text-5xl">See all your<Cover>peer-2-peer</Cover>Transactions here
            </h1>
            <div className="w-4/5 mx-auto">
                <Card title="Recent wallet transactions ">
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
        </div>
    )
}