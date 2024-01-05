import { neueXThin } from "@/styles/fonts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialogSuccess";
import Link from "next/link";

export default function SuccessMessage({ type }: { type: string }) {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={`${neueXThin.className} text-left text-5xl lg:text-6xl xl:text-7xl text-black-500 md:leading-relaxed lg:leading-[70px] md:mb-3 lg:mb-6 xl:mb-12`}
          >
            Gracias, en menos de 24 horas nos <br /> pondremos en contacto.
          </DialogTitle>
          <DialogDescription
            className={`${neueXThin.className} text-xl lg:text-4xl text-black-500 leading-none`}
          >
            <div className="flex flex-col gap-[28px]">
              {type == "quote" ? (
                <Link className="text-left text-3xl xl:text-4xl" href={"/"}>
                  Regresar al inicio.
                </Link>
              ) : null}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
