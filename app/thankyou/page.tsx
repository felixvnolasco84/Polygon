"use client";

import { neueThin } from "@/styles/fonts";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";


export default function ThankYouPage() {
  return (
    <div
      className={`${neueThin.className} flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12`}
    >
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Checkmark Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2Icon className="h-12 w-12 text-green-600" />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ¡Gracias por agendar tu sesión!
          </h2>

          <p className="text-xl text-gray-600">
            Hemos recibido tu solicitud correctamente. Un miembro de nuestro
            equipo se pondrá en contacto contigo para confirmar los detalles de
            tu sesión gratuita.
          </p>

          <div className="mt-8 border-t border-gray-200 pt-6 text-lg">
            <p className="font-medium text-gray-900">Mientras tanto...</p>
            <p className="mt-2 text-lg text-gray-600">
              ¿Quieres conocer más sobre nuestro enfoque único de marketing?
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Visitar nuestro sitio principal
          </Link>
        </div>

        {/* Footer Text */}
        <a href="mailto:hola@polygonag.com">
          <p className="mt-8 text-sm text-gray-500 lg:text-base">
            ¿Necesitas ayuda inmediata? Escríbenos a hola@polygonag.com
          </p>
        </a>
      </div>
    </div>
  );
}
