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
      className="border w-full border-[#EEEEEE] p-6 bg-[#EEEDEB] rounded-xl shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
    >
      <h1 className={`text-3xl font-light bg- text-[#6a51a6] border-b border-[#B5C0D0] pb-2 ${kanit.className}`}>
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
