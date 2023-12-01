import { neueThin, neueXThin } from "@/styles/fonts";

export default function GridTalent() {
  const features = [
    {
      title: "Tus objetivos comerciales importan",
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
    <div className="flex flex-col lg:gap-[50px]">
      <h3
        className={`${neueThin.className} text-xl transition ease-out relative z-10 lg:text-7xl lg:group-hover:bg-white lg:group-hover:translate-x-14  lg:px-24 px-4`}
      >
        Talento y tecnología en cada proyecto digital
      </h3>
      <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236636/Hero/zqgdrhztqkjuxsadesjb.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-[774px] items-end gap-4 bg-gradient-to-t from-black to-transparent to-60% px-8 pb-[30px] lg:px-24">
          <div className="block lg:hidden">
            {features.slice(1, 2).map((feature: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] lg:gap-[26px]"
              >
                <p
                  className={`${neueThin.className} text-xl lg:text-2xl text-white`}
                >
                  {feature.title}
                </p>
                <p
                  className={`${neueXThin.className} lg:text-2xl text-white lg:leading-[35px]`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden gap-4 lg:flex">
            {features.map((feature: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] text-white lg:gap-[10px]"
              >
                <p
                  className={`${neueThin.className} text-xl lg:text-2xl`}
                >
                  {feature.title}
                </p>
                <p
                  className={`${neueXThin.className} lg:text-2xl lg:leading-[35px] lg:max-w-[398px]`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
