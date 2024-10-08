"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "@repo/ui/appbar"
import { useRouter } from "next/navigation"

export default function () {
    const session = useSession();
    return <div className="w-screen h-full">
        <Appbar
            onSignin={async () => await signIn()}
            onSignout={async () => {
                await signOut({
                    callbackUrl: "/api/auth/signin"
                });
            }}
            user={session.data?.user} />
    </div>
}