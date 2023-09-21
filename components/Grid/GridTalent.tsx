import { neueThin, neueXThin } from "@/styles/fonts";

export default function GridTalent() {
  const features = [
    {
      title: "Orientados a resultados",
      description:
        "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
    },
    {
      title: "Profesionalismo",
      description:
        "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
    },
    {
      title: "Centrados en las personas",
      description:
        "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
    },
    {
      title: "Una experiencia óptima",
      description:
        "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
    },
  ];

  return (
    <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236636/Hero/zqgdrhztqkjuxsadesjb.png')] bg-no-repeat bg-cover bg-center">
      <div className="flex gap-4 h-[774px] items-end px-24 pb-[30px] bg-gradient-to-b from-transparent to-[#00000085]">
        {features.map((feature: any, index: any) => (
          <div key={index} className="flex flex-col gap-[26px]">
            <p className={`${neueThin.className} text-2xl text-white`}>
              {feature.title}
            </p>
            <p className={`${neueXThin.className} text-2xl text-white leading-[35px]`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
