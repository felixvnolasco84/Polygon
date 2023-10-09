"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { neueThin, neueXThin } from "@/styles/fonts";
import { Input } from "../ui/input";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { phoneRegex } from "@/components/Regex/Regex";
import { Loader2 } from "lucide-react";

const interest = [
  {
    id: "Social Media Marketing",
    label: "Social Media Marketing",
  },
  {
    id: "Paid Media",
    label: "Paid Media",
  },
  {
    id: "SEO",
    label: "SEO",
  },
  {
    id: "Web Development",
    label: "Web Development",
  },
  {
    id: "Video",
    label: "Video",
  },
] as const;

export function QuoteForm({
  services,
  minNumber,
  maxNumber,
}: {
  services: any[];
  minNumber: number;
  maxNumber: number;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let titles: any = services.map((service) => service.title);

  const FormSchema = z.object({
    service: z.enum(titles, {
      required_error: "Es necesario escoger un servicio",
    }),
    budget: z.array(z.number()).default([1000]),
    interest: z.array(z.string()),
    linkReference: z.string().optional().default(""),
    name: z
      .string()
      .min(2, {
        message: "El nombre debe de ser de al menos 2 carácteres.",
      })
      .max(160, {
        message: "El nombre no puede ser más de 160 carácteres.",
      }),
    email: z.string().email({ message: "Correo electrónico Inválido" }),
    phoneNumber: z.string().regex(phoneRegex, "Número de Teléfono Inválido"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      service: "",
      budget: [0],
      interest: [],
      linkReference: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    try {
      setIsLoading(true);
      const jsonData = JSON.stringify(data);
      const url = "https://polygon-backend.vercel.app/quote";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      };
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const responseData = await response.json();
        console.log("POST request successful:", responseData);
        toast({
          variant: "successFormMessage",
          title: "HEY!",
          description: "Se ha enviado correctamente el formulario",
        });
        setIsLoading(false);
      } else {
        console.error("POST request failed with status:", response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
      setIsLoading(false);
    }
  }

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4 justify-center"
                >
                  {services.map((service: any, index: any) => (
                    <FormItem
                      key={index}
                      className={`relative flex flex-col text-black-500 min-w-[398px] min-h-[237px] rounded-[10px] gap-6 bg-transparent`}
                    >
                      <FormControl
                        onClick={() => handleItemClick(index)}
                        className={`absolute bottom-0 left-0 w-full h-full
                        ${
                          index === selectedItem
                            ? "bg-flourescentYellow"
                            : "bg-gray-400 hover:bg-flourescentYellow"
                        }
                        `}
                      >
                        <RadioGroupItem
                          className="rounded-[10px] -z-10 border-none"
                          value={service.title}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer p-6 h-full">
                        <div className="flex flex-col gap-6">
                          <p className={`${neueThin.className} text-3xl`}>
                            {service.title}
                          </p>
                          <p
                            className={`${neueXThin.className} text-2xl max-w-[320px]`}
                          >
                            {service.description}
                          </p>
                        </div>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem
              className={`${neueThin.className} flex flex-col py-[60px] text-black-500 w-full min-h-[335px] bg-gray-400 rounded-[10px] items-center justify-between `}
            >
              <FormLabel className="text-center text-[40px]">
                ¿Tienes un presupuesto aproximado?
              </FormLabel>
              <FormControl>
                <Slider min={minNumber} max={maxNumber} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkReference"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-center bg-gray-400 px-6 py-[60px] w-full rounded-[10px]">
              <FormLabel className={`${neueThin.className} text-[40px]`}>
                En caso de que exista, compártenos tu página actual en la que
                debamos trabajar. (Si no tienes una, puedes proporcionarnos una
                referencia de lo que buscas).
              </FormLabel>
              <FormControl>
                <div className="p-4 rounded-[10px] w-3/4 bg-white">
                  <Input
                    className={`${neueThin.className}`}
                    placeholder="Link de página o referencia"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interest"
          render={() => (
            <FormItem className="flex flex-col gap-14 bg-gray-400 px-6 py-[60px] w-full">
              <FormLabel
                className={`${neueThin.className} text-[40px] leading-none`}
              >
                También estoy interesado en:
              </FormLabel>

              <div className="flex flex-row gap-10 m-auto w-full">
                {interest.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="interest"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel
                            className={`${neueThin.className} text-3xl font-normal`}
                          >
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col p-24 gap-[110px] items-center bg-gray-400">
          <div className="flex justify-center  gap-[70px]">
            <div className="w-[239px] h-[155px] bg-flourescentYellow"></div>
            <p
              className={`${neueXThin.className} text-black-500 text-2xl max-w-[578px] leading-[40px]`}
            >
              Nuestro equipo se pondrá en contacto contigo en las siguientes 24
              horas. La información que nos compartiste nos ayudará a tener una
              mejor idea de lo que buscas y cómo podemos ayudarte.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex bg-white p-4 gap-4 rounded-2xl">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="Nombre"
                        className="bg-transparent resize-none py-0"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Correo"
                        className="bg-transparent resize-none py-0"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Celular"
                        className="bg-transparent resize-none py-0"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative group">
              {true ? (
                <>
                  <Button
                    type="submit"
                    className="bg-black w-fit h-fit cursor-not-allowed"
                    disabled={isLoading}
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Por favor, espere
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  className="relative group bg-transparent hover:bg-transparent w-fit h-fit"
                  disabled={isLoading}
                >
                  <span className="relative z-10 h-fit gap-4 hover:bg-black hover:text-white text-gray-600 px-[64px] py-[16px] rounded-[15px] text-2xl font-normal bg-flourescentYellow">
                    Enviar
                  </span>

                  <Image
                    className="transition ease-out absolute left-[50%] top-[10%] group-hover:block group-hover:translate-x-28 h-fit p-2 bg-flourescentYellow group-hover:bg-flourescent-yellow cursor-pointer rounded-full"
                    width={48}
                    height={48}
                    src={rightArrow}
                    alt=""
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
