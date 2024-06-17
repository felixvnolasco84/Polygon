import { neueLight } from "@/styles/fonts";
import React from "react";
import Link from "next/link";
import ContactDialog from "../Dialog/ContactDialog";
import Logo from "@/public/images/Logo/polygonplus.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <nav className="container flex h-16 items-center justify-between px-4 lg:h-20 xl:h-[104px]">
        <Link
          className="min-h-[22px] max-w-[120px] md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]"
          href={"/"}
        >
          <Image src={Logo} alt="Polygon Agency Logo" />
        </Link>

        <div
          className={`${neueLight.className} hidden lg:flex text-2xl gap-[55px] items-center`}
        >
          <ContactDialog type="header" />
        </div>

        <div className="block lg:hidden">
          <ContactDialog type="header" />
        </div>
      </nav>
    </header>
  );
}
