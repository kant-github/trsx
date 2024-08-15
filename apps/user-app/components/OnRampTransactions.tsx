import { Card } from "@repo/ui/card"

enum Status {
    Success = "Success",
    Failure = "Failure",
    Processing = "Processing"
}

interface TransactionProps {
    time: Date;
    amount: number;
    status: Status;
    provider: string;
}

export const OnRampTransactions = ({ transactions }: { transactions: TransactionProps[] }) => {
    if (!transactions.length) {
        return <Card title="Recent wallet transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    console.log(typeof transactions[0]?.status);

    return <Card title="Recent wallet transactions">

        <div className="">
            {transactions.reverse().slice(0,4).map(t =>
                <div className="flex justify-between pt-3 pb-1 border-b border-[#b4bfcf]">
                    <div>
                        <div className="text-sm">
                            Received INR
                        </div>
                        <div className="text-slate-600 text-xs ">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-x-3">
                        <span className={`${t.status == "Processing" ? "bg-yellow-400" : "bg-green-400"} text-xs rounded-md p-1 cursor-pointer`}>
                            {t.status}
                        </span>
                        <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
                    </div>
                </div>
            )}
        </div>

    </Card>
}