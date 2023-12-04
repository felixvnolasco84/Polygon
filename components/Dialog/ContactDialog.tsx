import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Contact from "@/components/Contact/Contact";
import { Button } from "../ui/button";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";

export default function ContactDialog({ type }: any) {
  return (
    <Dialog>
      <DialogTrigger>
        <div          
          className="group relative h-fit w-fit bg-transparent p-0 hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {type == "header" ? (
            <>
              <span className="relative z-10 h-fit gap-4 rounded-[15px] bg-white px-[32px] py-[12px] text-lg font-normal text-black hover:bg-black hover:text-white lg:text-2xl">
                Hablemos
              </span>
              <Image
                className="group-hover:bg-flourescent-black absolute left-[50%] top-[-20%] h-fit cursor-pointer rounded-full bg-flourescentYellow p-2 transition ease-out group-hover:block group-hover:translate-x-28"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </>
          ) : (
            <div className="h-fit rounded-full bg-gray-200 p-2 group-hover:bg-white">
              
              <Image src={rightArrow} alt="" />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="left-[50%] top-[28%] h-fit bg-white p-0">
        <div className="lg:p-24">
          <Contact />
        </div>
      </DialogContent>
    </Dialog>
  );
}
