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

export default function ContactDialog() {
  return (
    //TODO:FIX "button inside p is not possible"
    <Dialog>
      <DialogTrigger>
        {/* Hablemos */}
        <Button
          type="submit"
          className="relative group bg-transparent hover:bg-transparent w-fit h-fit p-0"
        >
          <span className="relative z-10 h-fit gap-4 hover:bg-black hover:text-white px-[32px] py-[12px] rounded-[15px] text-2xl font-normal bg-white text-black">
            Hablemos
          </span>

          <Image
            className="transition ease-out absolute left-[50%] top-[10%] group-hover:block group-hover:translate-x-28 h-fit p-2 bg-flourescentYellow group-hover:bg-flourescent-black cursor-pointer rounded-full"
            width={48}
            height={48}
            src={rightArrow}
            alt=""
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-fit p-0 left-[50%] top-[28%]">
        <div className="p-24">
          <Contact />
        </div>
      </DialogContent>
    </Dialog>
  );
}
