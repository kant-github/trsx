"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const TopBarItem = ({ href, title }: { href: string; title: string; }) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div 
            className={`flex items-center cursor-pointer transition duration-300 ease-in-out transform ${selected ? "text-[#914F1E] scale-105" : "text-[#3C3D37] hover:text-[#914F1E] hover:scale-105"} `}
            onClick={() => router.push(href)}
        >
            <div className="text-sm font-light tracking-wider">
                {title}
            </div>
        </div>
    );
};
