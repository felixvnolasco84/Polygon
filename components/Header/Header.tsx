import { neueLight } from "@/styles/fonts";
import PolygonIcon from "@/public/images/Logo/PolygonLogo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactDialog from "../Dialog/ContactDialog";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 w-full h-[104px] flex justify-between items-center px-24 bg-white">
      <Link href={"/"}>
        <Image src={PolygonIcon} alt="" width={209} height={42} />
      </Link>
      <div className={`${neueLight.className} text-2xl  flex gap-[55px] items-center`}>
        <Link className="py-[12px]" href={"/"}>Qué hacemos</Link>
        <Link className="py-[12px]" href={"/"}>Nuestro trabajo</Link>
        <Link className="py-[12px]" href={"/"}>Ideas</Link>
        <Link className="py-[12px]" href={"/"}>Contacto</Link>
        <ContactDialog />
      </div>
    </div>
  );
}
