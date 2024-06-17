"use client";

import { neueLight, neueXThin } from "@/styles/fonts";
import "@/styles/main.css";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useState, ReactNode } from "react";

type Service = {
  title: string;
  items: string[];
};

interface ToggleDisplayProps {
  showFeature: boolean;
  children: ReactNode;
}

interface ServiceListProps {
  services: string[];
}

interface GridServicesItemProps {
  item: Service;
  showFeature: boolean;
  setShowFeature: (show: boolean) => void;
}

const ToggleDisplay = ({ showFeature, children }: ToggleDisplayProps) => (
  <div className={`transition-all duration-500 custom-fade ${showFeature ? "block" : "hidden"}`}>
    {children}
  </div>
);

const ServiceList = ({ services }: ServiceListProps) => (
  <ul className="flex flex-col items-center lg:h-[48px] lg:flex-row lg:gap-4">
    {services.map((service, index) => (
      <li key={index} className={`${neueLight.className} text-base lg:text-lg xl:text-2xl text-[#150C14]`}>
        {service}
      </li>
    ))}
  </ul>
);

const GridServicesItem = ({ item, showFeature, setShowFeature }: GridServicesItemProps) => (
  <li className="opacity group flex items-center justify-between border-b border-gray-800/20 py-4 xl:py-8">
    <div className="flex w-full flex-col gap-4 lg:gap-12">
      <ToggleDisplay showFeature={!showFeature}>
        <h3 className={`${neueXThin.className} text-2xl lg:text-4xl xl:text-5xl text-[#150C14] opacity-50 group-hover:opacity-100`}>
          {item.title}
        </h3>
      </ToggleDisplay>
      <ToggleDisplay showFeature={showFeature}>
        <ServiceList services={item.items} />
      </ToggleDisplay>
    </div>

    <div className="flex">
      <Button className="p-0" variant={"link"} onClick={() => setShowFeature(!showFeature)}>
        <Plus className={`${showFeature && "bg-black text-white"} rounded-full hover:bg-black hover:text-white h-4 w-4 lg:h-6 lg:w-6  transition-all duration-500`} />
      </Button>
    </div>
  </li>
);

export default function NewGridServicesItem({ item }: { item: Service }) {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  
  return <GridServicesItem item={item} showFeature={showFeature} setShowFeature={setShowFeature} />;
}