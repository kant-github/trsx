"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-black w-full hover:bg-gray-900 border border-[#1e293b] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:px-5 md:py-3 py-2 px-2 me-2 mb-2">
      {children}
    </button>

  );
};
