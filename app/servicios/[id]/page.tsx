import { Input } from "@/components/ui/input";
import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import { QuoteForm } from "@/components/Interest/QuoteForm";
import { services } from "@/components/Grid/GridServices";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from "next";
import SliderComponent from "@/components/Slider/SliderComponent";

  type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    
    const id = params.id;
    const service = services.find((service: any) => service.slug === id);
    
    return {
      title: service?.pageTitle,
      description: service?.metadescription
    };
  }

export default function Page({ params }: Props) {
  const { id } = params;

  const service: any = services.find((service: any) => service.slug === id);  
  

  return (
    <>
      <Head>
        <title>{service.pageTitle}</title>
        <meta name="description" content={service.metadescription} />
      </Head>
      <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1701196725/Hero/aw5sgcciztsdpzpbx9hi.png')] bg-no-repeat">
        <div className="from-2% flex h-[420px] flex-col justify-end gap-24 bg-gradient-to-t from-black to-transparent to-60% px-4 pb-[30px] lg:h-[1024px] lg:px-12 xl:px-24">
          <h1
            className={`${neueXThin.className} text-4xl lg:text-5xl xl:text-7xl text-white`}
          >
            {service.title}
          </h1>
          <div className="hidden items-start gap-4 lg:flex">
            {service?.objectives.map((objective: any, index: any) => (
              <div key={index} className="flex flex-col gap-4">
                <p
                  className={`${neueLight.className} lg:min-h-[50px] lg:text-xl xl:text-[28px] text-white lg:leading-none`}
                >
                  {objective.title}
                </p>

                <p
                  className={`${neueThin.className} lg:text-base xl:text-xl text-white xl:leading-[35px] max-w-[398px]`}
                >
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SliderComponent features={service.features} type="" />
      </div>
      <div className="flex flex-col gap-12 px-4 xl:container lg:px-12 xl:mb-20 xl:mt-20 xl:gap-[74px] xl:px-0">
        <h1
          className={`${neueXThin.className} text-2xl lg:text-7xl text-black-500`}
        >
          {service.tile}
        </h1>
        <div className="m-auto mb-8 flex max-w-full flex-col justify-start gap-5 lg:mb-0 lg:justify-center lg:gap-8 xl:max-w-[1226px] xl:gap-10">
          <h2
            className={`${neueThin.className} text-2xl md:text-3xl xl:text-[40px] text-black-500`}
          >
            Cuéntanos qué es lo que necesitas.
          </h2>
          <QuoteForm
            service={service.title}
            projects={service.projects}
            minNumber={service.minNumber}
            maxNumber={service.maxNumber}
          />
        </div>
      </div>
    </>
  );
}
