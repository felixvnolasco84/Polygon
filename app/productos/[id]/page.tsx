"use client";

import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { QuoteForm } from "@/components/Interest/QuoteForm";
import { services } from "@/components/Grid/GridServices";
import { Metadata } from "next";
import { object } from "zod";

export default function Page({ params }: any) {
  const { id } = params;

  const service: any = services.find((service: any) => service.slug === id);
  console.log(service);

  //   const metadata: Metadata = {
  //   title: service.pageTitle,
  //   description: service.metadescription,
  // };

  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236636/Hero/zqgdrhztqkjuxsadesjb.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-[1024px] flex-col justify-end gap-4 bg-gradient-to-b from-transparent to-[#00000085] px-8 pb-[30px] lg:px-24">
          <h1 className={`${neueXThin.className} text-7xl text-white`}>
            {service.title}
          </h1>
          <div className="flex items-start gap-4">
            {
              service?.objectives.map((objective: any, index: any) => (
              <div className="flex flex-col gap-4">
                <p
                  className={`${neueThin.className} text-2xl text-white lg:leading-[35px]`}
                >
                  {objective.title}
                </p>

                <p
                  className={`${neueLight.className} text-xl text-white lg:leading-[35px]`}
                >
                  {objective.description}
                </p>
              </div>
              ))
            }
          </div>
          <div className="block border-t-4 border-white pt-10 lg:hidden">
            {service?.features.slice(1, 2).map((feature: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] lg:gap-[26px]"
              >
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
          <div className="hidden gap-4 border-t-4 border-white pt-10 lg:flex">
            {service?.features.map((feature: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] lg:gap-[26px]"
              >
                <p
                  className={`${neueLight.className} text-xl lg:text-4xl text-white`}
                >
                  {feature.title}
                </p>
                <p
                  className={`${neueThin.className} lg:text-4xl text-white lg:leading-[35px]`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
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
