import { SendMoneyp2p } from "../../../../../components/SendMoneyp2p";
import { Cover } from "../../../../../components/ui/cover";
import Image from "next/image"
import transfer from "../../../../../public/transfer.jpg"
import balanceImg from "../../../../../public/balance.jpg"

export default function() {
    return (
        <div className="mt-32 mx-16">
            <div className="mb-16 mt-28">
                <h1 className="mb-3 bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-4xl text-transparent md:mb-4 md:text-5xl">Send money <Cover>quickly</Cover> and securely to
                    <Cover>friends.</Cover>
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
                <div className="-mt-16">
                    <Image className="mix-blend-multiply" alt="transfer" src={transfer} />
                </div>
                <div className="">
                    <SendMoneyp2p />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-12">
                <div className="mt-16">
                    {/* <BalanceCard amount={balance.amount} locked={balance.locked} /> */}
                </div>
                <div className="ml-20">
                    <Image width={400} height={400} className="mix-blend-multiply" alt="transfer" src={balanceImg}/>
                </div>
            </div>
        </div>
    )
}