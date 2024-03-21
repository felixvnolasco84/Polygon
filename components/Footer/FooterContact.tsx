import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import Contact from "../Contact/Contact";
import { neueRoman, neueXThin } from "@/styles/fonts";
import { ContactForm } from "../Contact/ContactForm";

export default function FooterContact() {
  return (
    <div className="container flex flex-col gap-8 bg-transparent text-white">
      <h2
        className={`${neueXThin.className} text-2xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <div className="hidden lg:block">
        <ContactForm />
      </div>
      <Dialog>
        <DialogTrigger className="block lg:hidden">
          <div className="flex h-fit w-fit items-center gap-2 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <span className={`${neueRoman.className} z-10 h-fit rounded-[15px] bg-white px-12 py-4 text-lg font-normal text-black lg:text-2xl`}>
              Hablemos
            </span>
            {/* <Image
              className="h-fit cursor-pointer rounded-full bg-flourescentYellow p-2"
              width={48}
              height={48}
              src={rightArrow}
              alt=""
            /> */}
          </div>
        </DialogTrigger>
        <DialogContent className="h-fit bg-white p-0">
          <div className="lg:p-24">
            <Contact />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
