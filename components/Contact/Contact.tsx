import { neueXThin } from "@/fonts";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div className="text-black-500] flex flex-col gap-6 bg-white px-4 py-12 lg:px-6 lg:py-6">
      <h2
        className={`${neueXThin.className} text-2xl lg:text-[70px] lg:leading-[80px] tracking-normal`}
      >
        Hablemos de cómo llevar tu negocio <br /> o marca al siguiente nivel.
      </h2>
      <ContactForm />
      <p></p>
    </div>
  );
}
