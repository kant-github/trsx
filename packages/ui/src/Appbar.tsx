import { Button } from "./button";
import { Dancing_Script } from 'next/font/google'
import { useRouter } from "next/navigation";

const font = Dancing_Script({ subsets: ["latin"], weight: "400" });

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {

    const router = useRouter();

    return <div className="flex w-full h-full justify-between bg-[#020817] border-[#344C64] border-b px-4 border-slate-300">
        <div onClick={() => {
            router.push("/dashboard")
            
        }} className="flex items-center hover:cursor-pointer">
            <div className="text-lg pl-6 flex flex-col justify-center">
                <img src="./test.png" className="w-16  z-[50] relative" alt="check" />
            </div>
            <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}


