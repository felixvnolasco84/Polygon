import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import { QuoteForm } from "@/components/Interest/QuoteForm";
import { services } from "@/components/Grid/GridServices";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from "next";

  type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    // const service = await fetch(`https://.../${id}`).then((res) => res.json());

    const service = services.find((service: any) => service.slug === id);

    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
      title: service?.pageTitle,
      description: service?.metadescription
    };
  }

export default function Page({ params }: Props) {
  const { id } = params;

  const service: any = services.find((service: any) => service.slug === id);
  console.log(service);

  return (
    <>
      <Head>
        <title>{service.pageTitle}</title>
        <meta name="description" content={service.metadescription} />
      </Head>
      <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1701196725/Hero/aw5sgcciztsdpzpbx9hi.png')] bg-no-repeat">
        <div className="from-2% flex h-[1024px] flex-col justify-end gap-24 bg-gradient-to-t from-black to-transparent to-60% px-8 pb-[30px] lg:px-24">
          <h1 className={`${neueXThin.className} text-7xl text-white`}>
            {service.title}
          </h1>
          <div className="flex items-start gap-4">
            {service?.objectives.map((objective: any, index: any) => (
              <div key={index} className="flex flex-col gap-4">
                <p
                  className={`${neueLight.className} text-[28px] text-white lg:leading-none`}
                >
                  {objective.title}
                </p>

                <p
                  className={`${neueThin.className} text-xl text-white lg:leading-[35px] max-w-[398px]`}
                >
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* MOBILE */}
        <div className="block border-t-4 border-white px-4 lg:hidden lg:px-24">
          {service?.features.slice(1, 2).map((feature: any, index: any) => (
            <div key={index} className="flex flex-col gap-[12px] lg:gap-[26px]">
              <p
                className={`${neueLight.className} text-xl lg:text-2xl text-white`}
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
        {/* DESKTOP */}
        <div className="hidden gap-4 bg-black-600 px-4 lg:flex lg:px-32 lg:py-32">
          {service?.features.map((feature: any, index: any) => (
            <div key={index} className="flex flex-col gap-[12px] lg:gap-[26px]">
              {feature?.title && (
                <p
                  className={`${neueLight.className} text-xl lg:text-4xl text-white`}
                >
                  {feature.title}
                </p>
              )}

              <p
                className={`${neueThin.className} lg:text-4xl text-white lg:leading-[60px] border-t-4 border-white pt-11`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mb-[120px] mt-[120px] flex flex-col gap-[74px]">
        <h1 className={`${neueXThin.className} text-7xl text-black-500`}>
          {service.tile}
        </h1>
        <div className="m-auto flex max-w-[1226px] flex-col justify-center gap-[16px]">
          <h2 className={`${neueThin.className} text-[40px] text-black-500`}>
            Cuéntanos qué es lo que necesitas.
          </h2>
          <QuoteForm
            projects={service.projects}
            minNumber={service.minNumber}
            maxNumber={service.maxNumber}
          />
        </div>
      </div>
    </>
  );
}
