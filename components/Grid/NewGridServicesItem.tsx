"use client";

import { neueXThin } from "@/styles/fonts";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

type Service = {
  title: string;
  items: string[];
};

export default function NewGridServicesItem({ item }: { item: Service }) {
  const [showFeature, setShowFeature] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full flex-col gap-4 lg:gap-12">
        <div
          className={`transition-all duration-500 ${
            showFeature ? "hidden" : "block"
          }`}
        >
          <h3
            className={`${neueXThin.className} text-2xl lg:text-4xl xl:text-7xl text-[#150C14]`}
          >
            {item.title}
          </h3>
        </div>
        <div
          className={`transition-all duration-500 ${
            showFeature ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-2">
            {item.items.map((service, index) => (
              <li
                key={index}
                className={`${neueXThin.className} text-base lg:text-lg xl:text-2xl text-[#150C14]`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex">
        <Button
          className="p-0"
          variant={"link"}
          onClick={() => setShowFeature(!showFeature)}
        >
          <Plus
            size={24}
            className={`${
              showFeature && "bg-black text-white"
            } rounded-full hover:bg-black hover:text-white`}
          />
        </Button>
      </div>
    </div>
  );
}
