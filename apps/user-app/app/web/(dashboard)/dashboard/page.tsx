import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation"
import Image from "next/image";
import { Caveat, Montserrat } from "next/font/google"
import logo from "../../../../public/final.jpg"
import React from "react";
import { Cover } from "../../../../components/ui/cover";
import { ContainerScroll } from "../../../../components/ui/container-scroll-animation";
import {LinkPreviewDemo} from "../../../../components/AboutMe"

const caveat = Caveat({ subsets: ["latin"] });
const monstreat = Montserrat({ subsets: ["latin"], weight:["300"]});

export default async function () {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/api/auth/signin");
    return null;

  }
  return (
    <div className="mt-32">
      <div className="flex flex-col justify-center items-center">

        <div className="md:text-md mb-4 flex items-center rounded-full border bg-[#ebecf5] px-4 py-2.5 font-sans text-sm font-semibold uppercase text-[#35364a] shadow-md md:px-5 cursor-context-menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-medal mr-2 h-5 w-5"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>Secure your transaction with ease</div>

        <h1 className="mb-3 bg-gradient-to-r from-[#0d3b66] to-[#0061ff] bg-clip-text text-center font-bold text-4xl text-transparent md:mb-4 md:text-6xl">Pine payments</h1>

        <div className="w-fit px-4 pb-4 text-center text-3xl text-neutral-800 dark:text-neutral-200 md:text-6xl">Making Payments a 
          <Cover>Breeze!</Cover>
        </div>

        <div className={`${monstreat.className} mx-auto mt-4 max-w-sm px-2 text-center text-black font-extralight md:max-w-2xl md:text-md`}>Experience seamless payments with our app! Effortlessly send money, pay for services, and manage your wallet—all with top-notch security and a sleek interface. Join us today and make every transaction a breeze!
        </div>
      </div>
      <div className="flex flex-col -mt-64">
        <ContainerScroll
          titleComponent={
            <>

            </>
          }
        >
          <Image
            src={logo}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="-mt-72">
        <LinkPreviewDemo/>
      </div>
    </div>
  )

}