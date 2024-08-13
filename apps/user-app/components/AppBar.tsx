// import { Button } from "@repo/ui/button";
// import { useRouter } from "next/navigation";
// import { Dancing_Script } from 'next/font/google'
// import { redirect } from "next/navigation";
// import { signOut } from "next-auth/react";


// const font = Dancing_Script({ subsets: ["latin"], weight: "400" });



// export const Appbar = ({
//     user,
//     onSignout
// }: AppbarProps) => {

//     const router = useRouter();

//     const handleSignOut = async () => {
//         await signOut({
//             callbackUrl: "/api/auth/signin"  // Optional: Redirect to the home page after sign-out
//         });
//     };
//     return <div className="flex w-full h-full justify-between bg-[#020817] border-[#1e293b] border-b px-4 border-slate-300">
//         <div onClick={() => {
//             router.push("/web/dashboard")
//         }} className="flex items-center hover:cursor-pointer">
//             <div className="text-lg pl-6 flex flex-col justify-center">
//                 <img src="./test.png" className="w-16  z-[50] relative" alt="check" />
//             </div>
//             <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>
//             <p className="text-red-500">{user?.name}</p>
//         </div>
//         <div className="flex flex-col justify-center pt-2">
//             <Button onClick={async () => {
//                 await signOut({
//                     callbackUrl: "/api/auth/signin"
//                 });
//             }}>{user ? "Logout" : "Login"}</Button>
//         </div>
//     </div>
// }

"use client"
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google'
import { Button } from "@repo/ui/button";
import { signOut, useSession } from "next-auth/react";
import logo from "../public/test.png"
import Image from "next/image";
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
    return <div className="flex w-screen h-full justify-between bg-[#020817] border-[#1e293b] border-b px-4">
        <div onClick={() => {
            router.push("/web/dashboard")
        }} className="flex items-center hover:cursor-pointer">
            <div className="text-lg pl-6 flex flex-col justify-center">
                <Image className="w-16  z-[50] relative" alt="Logo" src={logo}/>
            </div>
            <p className={`${font.className} text-white text-3xl pt-5`}>Pine Payments</p>
            {/* <p className="text-red-500">{user?.name}</p> */}
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