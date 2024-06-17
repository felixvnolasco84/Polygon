import { newServices } from "@/lib/utils";
import NewGridServicesItem from "./NewGridServicesItem";

export default function NewGridServices() {
  return (
    <section className="flex flex-col gap-4 lg:gap-12">
      <ul className="flex flex-col">
        {newServices.map((service: any, index: any) => (
          <NewGridServicesItem item={service} key={index} />
        ))}
      </ul>
    </section>
  );
}
