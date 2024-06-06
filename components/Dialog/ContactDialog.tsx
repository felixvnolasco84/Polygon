import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import { neueRoman } from "@/styles/fonts";
import { Button } from "../ui/button";

export default function ContactDialog({ type }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className={`${neueRoman.className} lg:text-xl xl:text-2xl bg-gray-200 text-black hover:bg-black hover:text-white lg:px-6 xl:px-8 lg:py-3 xl:py-6`}
        >
          Hablemos
        </Button>
      </DialogTrigger>
      <DialogContent className="container h-fit bg-white p-0 md:p-12 xl:p-24">
        <Contact />
      </DialogContent>
    </Dialog>
  );
}
