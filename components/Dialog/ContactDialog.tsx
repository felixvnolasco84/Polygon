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
          className={`${neueRoman.className} lg:text-xl xl:text-2xl bg-gray-200 text-black hover:bg-black hover:text-white lg:px-6 xl:px-12 lg:py-3 xl:py-7`}
        >
          Hablemos
        </Button>

        {/* <div className="group relative h-fit w-fit p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          {
            type == "header" ? (
              <span
                className={`${neueRoman.className}  relative z-10 h-fit gap-4 rounded-[15px] bg-[#F4F4F4]  lg:bg-white text-lg font-normal text-black hover:bg-black hover:text-white lg:px-6 xl:px-12 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl `}
              >
                Hablemos
              </span>
            ) : null
            // <div className="h-fit rounded-full bg-gray-200 p-2 group-hover:bg-white lg:block">
            //   <Image src={rightArrow} alt="" />
            // </div>
          }
        </div> */}
      </DialogTrigger>
      <DialogContent className="container h-fit bg-white p-0 md:p-12 xl:p-24">
        <Contact />
      </DialogContent>
    </Dialog>
  );
}
