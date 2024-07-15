import { neueLight, neueMedium, neueXThin } from "@/fonts";
import Image, { StaticImageData } from "next/image";

import alba_rodriguez from "@/public/images/Members/alba_rodriguez.webp";
import felix from "@/public/images/Members/felix_nolasco.webp";

const testimonials = [
  {
    image: alba_rodriguez,
    name: "Kirill Gukovskiy",
    position: "Global Head of Content Marketing",
    title: "“Thanks to the dedicated polygon team for their expertise.”",
    description:
      "As the Head of Content at inDrive, I lead the development and execution of the company’s global content and social media strategy in 40+ countries.",
  },
  {
    image: felix,
    name: "Kirill Gukovskiy",
    position: "Global Head of Content Marketing",
    title: "“Thanks to the dedicated polygon team for their expertise.”",
    description:
      "As the Head of Content at inDrive, I lead the development and execution of the company’s global content and social media strategy in 40+ countries.",
  },
];

type TestimonialCardProps = {
  item: {
    image: StaticImageData;
    name: string;
    position: string;
    title: string;
    description: string;
  };
};

function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="col-span-2 flex aspect-auto flex-col gap-4 rounded-md bg-[#F7F7F7] p-4 shadow-sm lg:col-span-1 lg:aspect-[15/9] lg:gap-6 lg:p-6 xl:gap-12 xl:p-12">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full shadow-sm xl:h-20 xl:w-20">
          <Image
            src={item.image}
            alt="Alba Rodriguez"
            fill
            className="h-full w-full object-cover object-center"
            objectFit="cover"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col">
          <h3 className={`${neueMedium.className} text-lg lg:text-xl xl:text-2xl text-[#150C14]`}>
            {item.name}
          </h3>
          <p className={`${neueLight.className} text-base lg:text-lg  xl:text-xl text-[#150C14]`}>
            {item.position}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p
          className={`${neueLight.className} text-xl leading-none tracking-tight  font-light text-[#150C14] lg:text-2xl xl:text-4xl`}
        >
          {item.title}
        </p>
        <p
          className={`${neueLight.className} text-sm text-black lg:text-base xl:text-xl`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

const NewGridClients = ({ items }: any) => {
  return (
    <section className="flex flex-col gap-y-8 lg:gap-y-12">
      <h2 className={`${neueLight.className} text-2xl text-center`}>
        CLIENTES
      </h2>
      <div className="flex flex-col gap-3">
        {/* <div className="grid grid-cols-2 gap-3">
          {testimonials.map((item: any, index: any) => (
            <TestimonialCard item={item} />
          ))}
        </div> */}
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
          {items.map((item: any, index: any) => (
            <div className="flex aspect-square items-center justify-center rounded-md bg-[#F7F7F7] shadow-sm">
              <div className={`relative h-16 w-3/4`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className={`${item.aspect == "square" ? "object-cover": "object-contain"} h-full w-full object-contain object-center`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGridClients;
