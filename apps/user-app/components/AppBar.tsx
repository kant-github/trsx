"use client"
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google'
import { Button } from "@repo/ui/button";
import { signOut, useSession } from "next-auth/react";
import logo from "../public/test.png";
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";

const font = Dancing_Script({ subsets: ["latin"], weight: "400" });

interface AppbarProps {
    user?: {
        name?: string | null;
    },
}

export function AppBar({}: AppbarProps) {
    const router = useRouter();
    const session = useSession();
    const user = session.data?.user;
    
    return (
        <div className="flex w-screen h-full justify-between bg-[#04080F] border-[#1e293b] border-b px-4 sm:px-6 md:px-8">
            <div 
                onClick={() => {
                    router.push("/web/dashboard")
                }} 
                className="flex items-center hover:cursor-pointer"
            >
                <div className="flex items-center">
                    <Image 
                        className="w-12 sm:w-16 z-[50] relative" 
                        alt="Logo" 
                        src={logo} 
                    />
                </div>
                <p className={`${font.className} text-white text-xl sm:text-2xl md:text-3xl pl-4 sm:pl-6`}>
                    Pine Payments
                </p>
            </div>
            <div className="flex flex-row justify-center gap-4 sm:gap-6 items-center">
                <div className="mt-2">
                    <ProfileMenu />
                </div>
                <div className="flex flex-col justify-center">
                    <Button 
                        onClick={async () => {
                            await signOut({
                                callbackUrl: "/api/auth/signin"
                            });
                        }}
                        className="text-sm sm:text-base"
                    >
                        {user ? "Logout" : "Login"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
