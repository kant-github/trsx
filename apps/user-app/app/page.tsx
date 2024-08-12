//" import "{ getServerSession } from "next-auth";
// import { authOptions } from "./lib/auth";
// import { redirect } from 'next/navigation'

// export default async function () {
//   const session = await getServerSession(authOptions);
//   if(session?.user) {
//     redirect("/dashboard")
//   } else{
//     redirect("/api/auth/signin")
//   }

// }

import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextInput } from "@repo/ui/textinput";
import { Button } from "@repo/ui/button";
import { Greybutton } from "@repo/ui/greybutton"
import { useRouter } from "next/navigation";

export default function() {
  
  return (
    <div className="h-screen fixed w-screen rounded-md bg-[#020817] flex flex-col  items-center justify-center antialiased">
      <div className="max-w-4xl mb-28 mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Your Wallet, Reinvented
        </h1>
        <p className="text-neutral-200 max-w-lg mx-auto my-6 text-md text-center relative z-10 ">
          Embrace seamless transactions with our payment app—where security meets simplicity. Effortlessly send money, pay bills, and shop online, all at your fingertips. Experience fast, secure payments and take control of your finances with ease. Join the movement toward a smarter way to pay!
        </p>
        <div className="z-[50] mt-8 w-full flex justify-center">
          <div className="z-[50] w-[80%]">
            <Greybutton>Sign In</Greybutton>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
