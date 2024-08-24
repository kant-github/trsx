import { useRouter } from "next/navigation"
import { Dancing_Script } from 'next/font/google'
import Image from "next/image";

const font = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const SinInAppBarComponent = () => {


    const router = useRouter();

    return (
        <div className="flex w-full h-full justify-between bg-[#020817] border-[#1e293b] border-b px-4">
            <div onClick={() => {
                router.push("/")
            }} className="flex items-center hover:cursor-pointer">
                <div className="text-lg pl-6 flex flex-col justify-center">
                    <Image
                        width={64}
                        height={64}
                        src="/test.png"
                        className="w-16  z-[50] relative"
                        alt="check"
                    />
                </div>
                <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>
            </div>
        </div>
    )
}