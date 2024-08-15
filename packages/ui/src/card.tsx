import React from "react";
import { Kanit } from "next/font/google"
const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });



export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border w-full border-[#EEEEE] px-6 py-4 bg-[#F6F5F2] rounded-xl shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
    >
      <h1 className={`text-3xl font-light text-[#6a51a6] border-b border-[#B5C0D0] pb-1.5 ${kanit.className}`}>
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
