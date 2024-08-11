"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return <div className={`flex ${selected ? "text-white" : "text-[#B6BBC4]"}  cursor-pointer  p-2 pl-8 transition-colors duration-300 ease-in-out`} onClick={() => {router.push(href)}}>
        <div className="pr-2">
            {icon}
        </div>
        <div className={`${selected ? "text-white" : "text-[#B6BBC4]"} text-sm font-light tracking-wider`}>
            {title}
        </div>
    </div>
}