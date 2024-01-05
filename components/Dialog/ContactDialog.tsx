import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import { neueRoman } from "@/styles/fonts";

export default function ContactDialog({ type }: any) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group relative h-fit w-fit bg-transparent p-0 hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          {type == "header" ? (
            <>
              <span
                className={`${neueRoman.className}  relative z-10 h-fit gap-4 rounded-[15px] bg-transparent lg:bg-white text-lg font-normal text-black hover:bg-black hover:text-white lg:px-6 xl:px-12 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl`}
              >
                Hablemos
              </span>
              <Image
                className="group-hover:bg-flourescent-black absolute left-[50%] top-[-20%] hidden h-fit cursor-pointer rounded-full bg-flourescentYellow p-2 transition ease-out group-hover:block group-hover:translate-x-28 lg:block"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </>
          ) : (
            <div className="h-fit rounded-full bg-gray-200 p-2 group-hover:bg-white lg:block">
              <Image src={rightArrow} alt="" />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="h-fit bg-white p-0 md:p-12 xl:p-24">
        <Contact />
      </DialogContent>
    </Dialog>
  );
}
