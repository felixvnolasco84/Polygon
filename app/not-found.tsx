import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-screen w-fit flex-col items-center justify-center gap-2 px-2">
      <h2 className="text-center text-2xl lg:text-4xl xl:text-6xl">
        Página no encontrada
      </h2>
      <p className="text-center text-xl lg:text-2xl xl:text-4xl">
        La pagina que buscas no existe o ha sido movida.
      </p>
      <Link href="/">
        <Button className="w-fit" variant={"CTAHero"} size={"lg"}>
          Regresar al inicio
        </Button>
      </Link>
    </div>
  );
}
