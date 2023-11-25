import { neueLight } from "@/styles/fonts";
import PolygonIcon from "@/public/images/Logo/PolygonLogo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactDialog from "../Dialog/ContactDialog";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 flex h-[104px] w-full items-center justify-between bg-white px-4 lg:px-24">
      <Link
        className="min-h-[22px] w-[209px] max-w-[110px] lg:max-w-none"
        href={"/"}
      >
        <Image src={PolygonIcon} alt="" width={209} height={42} />
      </Link>
      <div
        className={`${neueLight.className} hidden lg:block text-2xl  flex gap-[55px] items-center`}
      >
        <Link className="py-[12px]" href={"/"}>
          Qué hacemos
        </Link>
        <Link className="py-[12px]" href={"/"}>
          Nuestro trabajo
        </Link>
        <Link className="py-[12px]" href={"/"}>
          Ideas
        </Link>
        <Link className="py-[12px]" href={"/"}>
          Contacto
        </Link>
      </div>
      <Link className="block py-[12px] lg:hidden" href={"/"}>
        Contacto
      </Link>
    </div>
  );
}
