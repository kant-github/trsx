"use client";
import React from "react";
import { LinkPreview } from "../components/ui/link-preview";
import { Cover } from "./ui/cover";
import { Rajdhani} from "next/font/google"
const nunitoLight = Rajdhani({ subsets: ["latin"], weight:["300"]});
const nunitoDark = Rajdhani({ subsets: ["latin"], weight:["600"]});

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center text-center h-[20rem] md:h-[40rem] flex-col px-4 text-md md: text-2xl select-none">
      <p className={`${nunitoLight.className} font-thin`}>Want to chat? Drop me a message on </p>
      <p>
        <LinkPreview url="https://x.com/khairrishi" className={`${nunitoDark.className} font-black`}>
          Twitter,
        </LinkPreview>{" "}
        <span className={`${nunitoLight.className} font-thin`}>or{" "}</span>
        <LinkPreview url="https://github.com/kant-github" className={`${nunitoDark.className} font-black`}>
          GitHub
        </LinkPreview>{" "}
        <span className={`${nunitoLight.className} font-thin`}>or in{" "}</span>
      </p>
      <p className="font-bold">
        {" "}
        <LinkPreview
          url="https://www.linkedin.com/in/kant-linked/"
          className={`${nunitoDark.className} font-black`}
        >
          Linkedin,
        </LinkPreview>{" "}
      </p>
      <div>
      <p className={`${nunitoLight.className} font-thin`}>And let's make things <Cover>Happen</Cover> </p>
      </div>

    </div>
  );
}
