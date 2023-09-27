import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Contact from "@/components/Contact/Contact";

export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger>Hablemos</DialogTrigger>
      <DialogContent className="bg-white h-fit p-0 left-[50%] top-[28%]">
        <DialogDescription className="p-24">
          <Contact />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
