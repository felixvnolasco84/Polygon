import { neueXThin } from "@/fonts";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex h-fit w-full flex-col gap-6 bg-white p-4 text-black-500">
      <h2 className={`${neueXThin.className} text-2xl lg:text-4xl xl:text-5xl`}>
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <ContactForm />
      <p></p>
    </div>
  );
}
