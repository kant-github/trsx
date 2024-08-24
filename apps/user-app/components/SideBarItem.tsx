"use client"
import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div
            className={`flex items-center cursor-pointer p-2 transition-colors duration-300 ease-in-out ${selected ? "text-white" : "text-[#B6BBC4]"
                }`}
            onClick={() => {
                router.push(href);
            }}
        >
            <div className="pr-2">{icon}</div>
            <div
                className={`text-sm font-light tracking-wider ${selected ? "text-white" : "text-[#B6BBC4]"
                    } hidden md:block`}
            >
                {title}
            </div>
        </div>
    );
};
