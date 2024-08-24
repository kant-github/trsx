import { Card } from "@repo/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";

async function getTransactions() {
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id),
        },
    });
    return transactions;
}

export default async function Transactions() {
    const transactions = await getTransactions();
    console.log("For changes");

    return (
        <div className="w-full md:w-4/5 mx-auto px-4 md:px-0">
            <Card title="Recent transactions">
                <div className="md:max-h-80 max-h-40 overflow-y-auto scroll-smooth">
                    {transactions.reverse().map((t) => (
                        <div
                            key={t.id}
                            className="flex flex-col md:flex-row justify-between pt-3 pb-1 border-b border-[#b4bfcf]"
                        >
                            <div>
                                <div className="text-xs md:text-sm">Received INR</div>
                                <div className="text-slate-600 text-[10px] md:text-xs">
                                    {t.timeStamp.toDateString()}
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-x-3 mt-2 md:mt-0">
                                <span className="bg-green-400 text-[10px] md:text-xs rounded-md p-1 cursor-pointer">
                                    Success
                                </span>
                                <div className="flex flex-col justify-center text-sm md:text-base">
                                    + Rs {t.amount / 100}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
