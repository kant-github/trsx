import { Button } from "./button";


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
    return <div className="flex w-full h-full justify-between bg-[#020817] border-[#344C64] border-b px-4 border-slate-300">
        <div className="text-lg pl-6 flex flex-col justify-center">
            <img src="./test.png" className="w-16  z-[50] relative" alt="check" />
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}