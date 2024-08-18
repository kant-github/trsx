"use client"
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google'
import { Button } from "@repo/ui/button";
import { signOut, useSession } from "next-auth/react";
import logo from "../public/test.png"
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";
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
        <div className="flex w-screen h-full justify-between bg-[#04080F] border-[#1e293b] border-b px-4">
            <div onClick={() => {
                router.push("/web/dashboard")
            }} className="flex items-center hover:cursor-pointer">
                <div className="text-lg pl-6 flex flex-col justify-center">
                    <Image className="w-16  z-[50] relative" alt="Logo" src={logo} />
                </div>
                <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>

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