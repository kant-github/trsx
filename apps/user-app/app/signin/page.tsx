"use client";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import SignInCard from "../../components/SignIn";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { SinInAppBarComponent } from "../../components/SignInAppBarComponent";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/web/dashboard");
        }
    }, [status, router]);

    const handleSubmit = async (e?: React.FormEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
        }

        const res = await signIn("credentials", {
            phone,
            password,
            redirect: false,
        });

        if (!res?.error) {
            router.push("/web/dashboard");
        } else {
            // Handle error (e.g., show an error message)
        }
    };

    if (status === "loading") {
        return <div>Loading...</div>; // Show a loading state while the session status is being determined
    }

    if (status === "authenticated") {
        return null; // You can return null or a loader while redirecting
    }

    return (
        <div>
            <div className="fixed h-20 w-screen top-0 z-50">
                <SinInAppBarComponent />
            </div>
            <div className="min-h-screen fixed w-screen bg-[#020817] flex flex-col items-center justify-center antialiased">
                <div className="w-1/2 mx-auto p-4 z-10 flex-grow flex flex-col items-center justify-center">
                    <h1 className="relative text-md md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        {/* Ready to Get Started? */}
                    </h1>
                    <div className="z-50 w-2/3 mx-auto flex justify-center">
                        <SignInCard setPhone={setPhone} setPassword={setPassword} handleSubmit={handleSubmit} />
                    </div>
                </div>
                <BackgroundBeams className="z-0" />
            </div>
        </div>
    );
}
