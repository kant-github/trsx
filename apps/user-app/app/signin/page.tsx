"use client"
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import SignInCard from "../../components/SignIn";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { SinInAppBarComponent } from "../../components/SignInAppBarComponent";
import { useRouter } from "next/navigation";
import { authOptions } from "../lib/auth"

export default function SignIn() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    // const { data: session } = useSession();

    const handleSubmit = async (e?: React.FormEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
        }

        const res = await signIn('credentials', {
            phone: phone,
            password: password,
            redirect: false,
        });

        if (!res?.error) {
            router.push('/web/dashboard');
        } else {

        }

    };

    return (
        <div>
            <div className="fixed h-20 w-screen top-0 z-50">
                <SinInAppBarComponent />
            </div>
            <div className="min-h-screen  fixed w-screen bg-[#020817] flex flex-col items-center justify-center antialiased">
                <div className="max-w-4xl mb-28 mx-auto p-4 z-10">
                    <h1 className="relative text-lg md:text-6xl mb-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Ready to Get Started?
                    </h1>
                    <div className="z-50 flex justify-center ">
                        <SignInCard setPhone={setPhone} setPassword={setPassword} handleSubmit={handleSubmit} />
                    </div>
                    {/* <button onClick={clickHandler} className="bg-red-500">Check</button> */}
                </div>
                <BackgroundBeams className="z-0" />
            </div>
        </div>
    );
}




