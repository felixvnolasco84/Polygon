import LikeImage from "@/public/svg/LikeImage.svg";
import ChartImage from "@/public/svg/ChartImage.svg";
import ComputerImage from "@/public/svg/ComputerImage.svg";

import Image, { StaticImageData } from "next/image";
import { neueThin, neueXThin } from "@/styles/fonts";

type GridHomeFeaturesProps = {
  image: StaticImageData;
  title: string;
  description: string;
  width?: string;
  height?: string;
};

const GridHomeFeaturesItems: GridHomeFeaturesProps[] = [
  {
    image: LikeImage,
    title: "Conecta y cautiva",
    description:
      "Creamos estrategias que fomentan la interacción con tu audiencia, generando una comunidad comprometida y fiel a tu marca.",
  },
  {
    image: ChartImage,
    title: "Maximiza tu inversión",
    description:
      "Nuestro enfoque estratégico garantiza que cada peso invertido genere un retorno óptimo, aumentando la eficiencia de tus campañas.",
  },
  {
    image: ComputerImage,
    title: "Haz que cada clic cuente",
    description:
      "Optimizamos la experiencia del usuario en tu sitio web, lo que se traduce en tasas de conversión más altas y clientes más satisfechos. fiel a tu marca.",
  },
];

export default function GridHomeFeatures() {
  return (
    <div
      className={`${neueXThin.className} flex flex-col lg:flex-row lg:gap-6 xl:gap-12 px-4 text-center lg:px-12 xl:px-24 items-center`}
    >
      {GridHomeFeaturesItems.map((item, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center justify-center lg:w-4/12 lg:gap-1 xl:gap-3"
        >
          <div className={`relative flex aspect-square w-8/12 justify-center md:w-4/12 lg:w-full`}>
            <Image
              className={`h-full w-full rounded-[10px] object-cover object-center`}
              src={item.image}
              alt={item.title}
              fill
            />
          </div>
          <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {item.title}
          </h3>
          <p className="max-w-lg text-lg xl:text-xl 2xl:text-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}