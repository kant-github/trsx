"use client"

import { ReactNode } from "react";
import { useRouter } from "next/navigation"
export const Greybutton = ({ children }: { children: ReactNode}) => {

  const router = useRouter()
  
  return (
    <div>
      <button onClick={() => {
        router.push("/api/auth/signin")
      }} className="text-black bg-neutral-200 w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{children}</button>
    </div>
      
  );
};
 