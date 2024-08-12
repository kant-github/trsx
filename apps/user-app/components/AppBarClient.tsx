"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "@repo/ui/appbar"
import { useRouter } from "next/navigation"

export default function () {
    const router = useRouter();
    const session = useSession();
    return <div className="w-screen h-full">
        <Appbar
            onSignin={async () => await signIn()}
            onSignout={async () => {
                await signOut();
                router.push("/api/auth/signin")
            }}
            user={session.data?.user} />
    </div>
}