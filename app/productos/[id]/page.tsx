"use client";

import { neueThin, neueXThin } from "@/styles/fonts";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import { Input } from "@/components/ui/input";
import { InterestCheckbox } from "@/components/Interest/InterestCheckbox";
import { useState } from "react";
import { productos } from "@/lib/data";

export default function Page({ params }: any) {
  const { id } = params;

  const product: any = productos.find(
    (product: any) => product.webTitle === id
  );

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const { title, services, minNumber, maxNumber, textReference } = product;
  return (
    <div className="flex flex-col gap-[74px]  p-24">
      <h1 className={`${neueXThin.className} text-7xl text-black-500`}>
        {title}
      </h1>

      <div className="flex flex-col gap-[50px]">
        <h2 className={`${neueThin.className} text-[40px] text-black-500`}>
          Cuéntanos qué es lo que necesitas.
        </h2>
        <div className="flex gap-4 justify-center">
          {services.map((service: any, index: any) => (
            <div
              className={`cursor-pointer flex flex-col p-6 text-black-500 min-w-[398px] min-h-[237px] rounded-[10px] gap-6 ${
                index === selectedItem
                  ? "bg-flourescentYellow"
                  : "bg-gray-400 hover:bg-flourescentYellow"
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <p className={`${neueThin.className} text-3xl`}>
                {service.title}
              </p>
              <p className={`${neueXThin.className} text-2xl max-w-[320px]`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`${neueThin.className} flex flex-col text-[40px] py-[60px] text-black-500 w-full min-h-[335px] bg-gray-400 rounded-[10px] items-center justify-between`}
        >
          <p className="text-center">¿Tienes un presupuesto aproximado?</p>
          <RangeSlider minNumber={minNumber} maxNumber={maxNumber} />
        </div>

        <div
          className={`${neueThin.className} flex flex-col text-[40px] py-[60px] text-black-500 w-full min-h-[335px] bg-gray-400 rounded-[10px] items-center justify-between`}
        >
          <p className=" pl-6">{textReference}</p>

          <div className="p-4 rounded-[10px] w-3/4 bg-white">
            <Input placeholder="Link de página o referencia" />
          </div>
        </div>

        <div className="flex bg-gray-400 pl-6 py-[60px]">
          <InterestCheckbox />
        </div>

        <div className="flex flex-col bg-gray-400">
          <div className="flex justify-center p-24 gap-[70px]">
            <div className="w-[239px] h-[155px] bg-flourescentYellow"></div>
            <p
              className={`${neueXThin.className} text-black-500 text-2xl max-w-[578px] leading-[40px]`}
            >
              Nuestro equipo se pondrá en contacto contigo en las siguientes 24
              horas. La información que nos compartiste nos ayudará a tener una
              mejor idea de lo que buscas y cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
