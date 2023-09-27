import { neueXThin } from "@/fonts";
import { ContactForm } from "../Contact/ContactForm";

export default function FooterContact() {
  return (
    <div className="flex flex-col p-[24px] text-white gap-5 bg-transparent">
      <h2
        className={`${neueXThin.className} text-[70px] leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <ContactForm />
    </div>
  );
}
