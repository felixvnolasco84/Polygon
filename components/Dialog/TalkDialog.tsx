"use client";

import { neueRoman } from "@/styles/fonts";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import Contact from "@/components/Contact/Contact";
import { useState } from "react";

export default function TalkDialog({
  message,
  bgColor,
  bgHoverColor,
  bgButtonColor,
  bgButtonHoverColor,
}: {
  message: string;
  bgColor?: string;
  bgHoverColor?: string;
  bgButtonColor?: string;
  bgButtonHoverColor?: string;
}) {

  return (
    <Dialog>
      <DialogTrigger >
        <div className="group relative hidden items-center gap-1 focus:outline-none lg:flex">
          <div
            className={`relative w-full overflow-hidden rounded-[15px] ${bgColor}`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-0 ${bgHoverColor} transition-all duration-700 group-hover:w-full`}
            >
              <p
                className={`invisible group-hover:visible transition-opacity text-black ${neueRoman.className} lg:text-xl xl:text-2xl pl-10 py-4 transition-all rounded-[15px] text-left`}
              >
                {message}
              </p>
            </div>
            <p
              className={`${neueRoman.className} lg:text-xl xl:text-2xl pl-12 py-4 w-full text-left`}
            >
              {message}
            </p>
          </div>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className={`hidden h-fit cursor-pointer rounded-full ${bgButtonColor} p-2 group-hover:${bgButtonHoverColor} lg:block`}
            width={40}
            height={40}
            src={rightArrow}
            alt=""
          />
        </div>
      </DialogTrigger>
      <DialogContent className="h-fit bg-white p-0">
        <div className="lg:p-24">
          <Contact />
        </div>
      </DialogContent>
    </Dialog>
  );
}
