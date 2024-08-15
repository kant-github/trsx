import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google'
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";


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

    const handleSignOut = async () => {
        await signOut({
            callbackUrl: "/api/auth/signin"  // Optional: Redirect to the home page after sign-out
        });
    };
    return <div className="flex w-full h-full justify-between bg-[#020817] border-[#1e293b] border-b px-4 border-slate-300">
        <div onClick={() => {
            router.push("/web/dashboard")
        }} className="flex items-center hover:cursor-pointer">
            <div className="text-lg pl-6 flex flex-col justify-center">
                <img src="./test.png" className="w-16  z-[50] relative" alt="check" />
            </div>
            <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={async () => {
                await signOut({
                    callbackUrl: "/api/auth/signin"
                });
            }}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}


