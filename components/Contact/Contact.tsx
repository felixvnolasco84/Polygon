import { neueXThin } from "@/fonts";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div className="text-black-500 gap-6 bg-white p-[24px] flex-col flex">
      <h2
        className={`${neueXThin.className} text-[70px] leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <ContactForm />
      <p></p>
    </div>
  );
}
