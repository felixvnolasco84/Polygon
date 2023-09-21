import { neueXThin } from "@/styles/fonts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function SuccessMessage() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={`${neueXThin.className} text-7xl text-black-500 leading-[70px] mb-11`}
          >
            Gracias, en menos de 24 horas nos <br /> pondremos en contacto.
          </DialogTitle>
          <DialogDescription
            className={`${neueXThin.className} text-4xl text-black-500 leading-none`}
          >
            <div className="flex flex-col gap-[28px]">
              <Link href={"/"}>Regresar al inicio.</Link>
              <Link href={"/productos/web"}>Ver proyectos relacionados.</Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
