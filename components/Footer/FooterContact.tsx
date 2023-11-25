import { neueXThin } from "@/fonts";
import { ContactForm } from "../Contact/ContactForm";

export default function FooterContact() {
  return (
    <div className="mt-12 flex flex-col gap-5 bg-transparent text-white lg:p-[24px]">
      <h2
        className={`${neueXThin.className} text-2xl lg:text-[70px] lg:leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <ContactForm />
    </div>
  );
}
