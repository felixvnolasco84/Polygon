import { neueXThin } from "@/fonts";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <h2
        className={`${neueXThin.className} text-[70px] leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio o marca al siguiente nivel.
      </h2>
      <ContactForm />
    </div>
  );
}
