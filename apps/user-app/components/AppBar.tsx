"use client"
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google'
import { Button } from "@repo/ui/button";
import { signOut, useSession } from "next-auth/react";
import logo from "../public/test.png"
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";
const font = Dancing_Script({ subsets: ["latin"], weight: "400" });

interface AppbarProps {
    user?: {
        name?: string | null;
    },
}

export function AppBar({
}: AppbarProps) {
    const router = useRouter();
    const session = useSession();
    const user = session.data?.user
    return (
        <div className="flex flex-row w-screen h-full justify-between bg-[#04080F] border-[#1e293b] border-b px-4">
            <div onClick={() => {
                router.push("/web/dashboard")
            }} className="flex items-center hover:cursor-pointer">
                <div className="text-lg md:pl-6 flex flex-col justify-center">
                    <Image
                        width={64}
                        height={64}
                        src="/test.png"
                        className="w-16  z-[50] relative"
                        alt="check"
                    />
                </div>
                <p className={`${font.className} text-white text-xl md:text-2xl pt-5`}>Pine Payments</p>
            </div>
            <div className="flex flex-row justify-center gap-6 items-center pt-2">
                <div className="mt-2">
                    <ProfileMenu />
                </div>
                <div className="flex flex-col pt-2 justify-center">
                    <Button onClick={async () => {
                        await signOut({
                            callbackUrl: "/api/auth/signin"
                        });
                    }}>{user ? "Logout" : "Login"}</Button>
                </div>
            </div>
        </div>
    )
}