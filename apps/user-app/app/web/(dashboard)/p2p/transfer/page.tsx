import { SendMoneyp2p } from "../../../../../components/SendMoneyp2p";
import { Cover } from "../../../../../components/ui/cover";
import Image from "next/image";
import transfer from "../../../../../public/transfer.jpg";

export default function() {
    return (
        <div className="mx-4 md:mx-16 h-[73vh]">
            <div className="mb-16 md:mt-20 mt-12">
                <h1 className="mb-3 bg-gradient-to-r from-[#0d3b66] select-none to-[#0061ff] bg-clip-text text-center font-bold text-xl text-transparent md:mb-4 md:text-5xl">
                    Send money <Cover>quickly</Cover> and securely to
                    <Cover>friends.</Cover>
                </h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-16">
                <div className="md:w-1/2">
                    <Image className="mix-blend-multiply" alt="transfer" src={transfer} />
                </div>
                <div className="md:w-1/2">
                    <SendMoneyp2p />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-12">
            </div>
        </div>
    );
}
