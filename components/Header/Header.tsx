import { neueLight } from "@/styles/fonts";
import PolygonIcon from "@/public/images/Logo/PolygonLogo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 w-full h-[104px] flex justify-between items-center px-24 bg-white">
      <Image src={PolygonIcon} alt="" width={209} height={42} />
      {/* <div className="w-[209px] h-[42px] bg-flourescentYellow">II</div> */}
      <div className={`${neueLight.className} text-2xl  flex gap-[55px]`}>
        <Link href={"/"}>Qué hacemos</Link>
        <Link href={"/"}>Nuestro trabajo</Link>
        <Link href={"/"}>Ideas</Link>
        <Link href={"/"}>Contacto</Link>
        <Link href={"/"}>Hablemos</Link>
      </div>
    </div>
  );
}
