import { neueLight } from "@/styles/fonts";
import PolygonIcon from "@/public/images/Logo/Logo_Polygon_SVG.svg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactDialog from "../Dialog/ContactDialog";
import PolygonLogo from "../Logo/PolygonLogo";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 w-full bg-gray-400">
      <div className="container flex h-16 items-center justify-between px-4 lg:h-20 xl:h-[104px]">
        <Link
          className="min-h-[22px] max-w-[90px] md:max-w-[110px] lg:max-w-[160px] xl:max-w-[180px]"
          href={"/"}
        >
          {/* <Image className="text-flourescentYellow" src={PolygonIcon} alt="" width={209} height={42} /> */}
          <PolygonLogo fillColor="" />
        </Link>
        <div
          className={`${neueLight.className} hidden lg:flex text-2xl gap-[55px] items-center`}
        >
          <ContactDialog type="header" />
        </div>
        <div className="block lg:hidden">
          <ContactDialog type="header" />
        </div>
      </div>
    </div>
  );
}
