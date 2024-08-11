import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border border-[#EEEEEE] p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
    >
      <h1 className="text-2xl font-bold text-[#6a51a6] border-b border-[#B5C0D0] pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
