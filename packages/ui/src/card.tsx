import React from "react";
import { Kanit } from "next/font/google"
const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });



export function Card({
  title,
  children,
  drop,
  dropDown
}: {
  title: string;
  children?: React.ReactNode;
  drop?: string;
  dropDown?: () => void
}): JSX.Element {
  return (
    <div className="border border-[#EEEEE] px-6 py-4 bg-[#F6F5F2] rounded-xl shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <div className="flex justify-between w-full">
        <h1 className={`text-3xl font-light text-[#6a51a6] border-b border-[#B5C0D0] pb-1.5 ${kanit.className}`}>
          {title}
        </h1>
        <div>
          {
            drop && (
              <svg
              onClick={dropDown}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f50004"
                className="w-8 h-8 rounded-lg bg-red-100 cursor-pointer p-1 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75l2.25 2.25m0 0L16.5 14.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33z"
                />
              </svg>

            )
          }

        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
