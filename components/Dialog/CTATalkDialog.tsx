"use client";

import { neueRoman } from "@/styles/fonts";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import Contact from "@/components/Contact/Contact";

export default function CTATalkDialog({
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
      <DialogTrigger>
        <div className="group relative flex items-center gap-1 focus:outline-none">
          <div
            className={`relative w-full overflow-hidden rounded-[15px] ${bgColor}`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-0 ${bgHoverColor} transition-all duration-700 group-hover:w-full`}
            >
              <p
                className={`invisible group-hover:visible transition-opacity text-black ${neueRoman.className} xl:text-lg 2xl:text-xl  pl-3 py-2 lg:pl-5 lg:py-2 xl:pl-10 xl:py-4 transition-all rounded-[15px] text-left`}
              >
                {message}
              </p>
            </div>
            <p
              className={`${neueRoman.className} xl:text-lg 2xl:text-xl pl-3 py-2 lg:pl-5 lg:py-2 2xl:pl-10 2xl:py-4 w-full text-left`}
            >
              {message}
            </p>
          </div>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className={`h-fit cursor-pointer rounded-full ${bgButtonColor} p-2 group-hover:${bgButtonHoverColor} lg:block`}
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
