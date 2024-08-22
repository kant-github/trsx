import { Card } from "@repo/ui/card";
import { OnRampStatus } from "@prisma/client"
interface TransactionProps {
    time: Date;
    amount: number;
    status: OnRampStatus;
    provider: string;
}

export const OnRampTransactions = ({ transactions }: { transactions: TransactionProps[] }) => {
    if (!transactions.length) {
        return (
            <Card title="Recent wallet transactions">
                <div className="text-center pb-8 pt-8">No Recent transactions</div>
            </Card>
        );
    }

    return (
        <Card title="Recent wallet transactions">
            <div className="">
                {transactions.slice(0, 4).reverse().map((t) => (
                    <div key={t.time.getTime()} className="flex justify-between pt-3 pb-1 border-b border-[#b4bfcf]">
                        <div>
                            <div className="text-sm">Received INR</div>
                            <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
                        </div>
                        <div className="flex items-center justify-center gap-x-3">
                            <span className={`${t.status === OnRampStatus.Processing ? "bg-yellow-400" : "bg-green-400"} text-xs rounded-md p-1 cursor-pointer`}>
                                {t.status}
                            </span>
                            <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
