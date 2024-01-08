import { neueXThin } from "@/styles/fonts";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function LinkComponent({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${neueXThin.className} text-lg xl:text-xl decoration-[#b5afb4] underline underline-offset-8 flex min-h-[40px] items-center gap-1 w-fit`}
    >
      {title}
      <ArrowUpRight className="text-[hsl(310,4%,20%)]" />
    </Link>
  );
}
