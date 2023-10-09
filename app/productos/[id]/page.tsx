"use client";

import { neueThin, neueXThin } from "@/styles/fonts";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { productos } from "@/lib/data";
import { Slider } from "@/components/ui/slider";
import { QuoteForm } from "@/components/Interest/QuoteForm";

export default function Page({ params }: any) {
  const { id } = params;

  const product: any = productos.find(
    (product: any) => product.webTitle === id,
  );

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const { title, services, minNumber, maxNumber, textReference } = product;
  return (
    <div className="container mt-[120px] mb-[120px] flex flex-col gap-[74px]">
      <h1 className={`${neueXThin.className} text-7xl text-black-500`}>
        {title}
      </h1>
      <div className="flex flex-col justify-center max-w-[1226px] m-auto gap-[16px]">
        <h2 className={`${neueThin.className} text-[40px] text-black-500`}>
          Cuéntanos qué es lo que necesitas.
        </h2>
        <QuoteForm
          services={services}
          minNumber={minNumber}
          maxNumber={maxNumber}
        />
      </div>
    </div>
  );
}
