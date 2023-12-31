import { neueLight } from "@/styles/fonts";
import PolygonIcon from "@/public/images/Logo/Logo_Polygon_SVG.svg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactDialog from "../Dialog/ContactDialog";
import PolygonLogo from "../Logo/PolygonLogo";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-gray-400 px-4 lg:h-20 lg:px-12 xl:h-[104px] xl:px-24">
      <Link
        className="min-h-[22px] w-[209px] max-w-[110px] lg:max-w-none"
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
  );
}
