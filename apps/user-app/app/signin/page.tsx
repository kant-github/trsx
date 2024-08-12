"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import SignInCard from "../../components/SignIn";
import { BackgroundBeams } from "../../components/ui/background-beams";


export default function SignIn() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        console.log("before result -------- >");

        const result = await signIn("credentials", {
            phone,
            password,
        });
    };



    return (
        <div className="h-screen  fixed w-screen rounded-md bg-[#020817] flex flex-col items-center justify-center antialiased">


            <div className="max-w-4xl mb-28 mx-auto p-4 z-10">
                <h1 className="relative text-lg md:text-6xl mb-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Ready to Get Started?
                </h1>

                <div className="z-50 w-2/7 flex justify-center ">
                    <SignInCard setPhone={setPhone} setPassword={setPassword} handleSubmit={handleSubmit} />
                </div>
            </div>
            <BackgroundBeams className="z-0" />
        </div>
    );
}




