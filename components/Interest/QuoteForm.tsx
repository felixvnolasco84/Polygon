"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Resend } from "resend";
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
import { phoneRegex } from "@/components/Regex/Regex";
import { Loader2 } from "lucide-react";
import { Range } from "../ui/range";
import { sendEmail } from "@/app/_actions";
import { services } from "../Grid/GridServices";
import SuccessMessage from "../Contact/SuccessMessage";
import { Slider } from "../ui/slider";

export function QuoteForm({
  service,
  projects,
  minNumber,
  maxNumber,
}: {
  service: string;
  projects: any[];
  minNumber: number;
  maxNumber: number;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  let titles: any = projects.map((service) => service.title);
  const title = service;
  const interests = services.filter((service) => service.title !== title);

  const FormSchema = z.object({
    service: z.string().default(service),
    project: z.enum(titles, {
      required_error: "Es necesario escoger un servicio",
    }),
    budget: z.string().default("45000"),
    interest: z.array(z.string()),
    linkReference: z.string().optional().default(""),
    name: z
      .string()
      .min(2, {
        message: "El nombre debe tener al menos 2 carácteres.",
      })
      .max(160, {
        message: "El nombre no puede tener más de 160 carácteres.",
      }),
    email: z.string().email({ message: "Correo electrónico Inválido" }),
    phoneNumber: z.string().regex(phoneRegex, "Número de Teléfono Inválido"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      service: service,
      project: "",
      budget: "",
      interest: [],
      linkReference: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      await sendEmail(data);
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {        
        setShowModalMessage(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "OH!",
        description: "No se ha enviado correctamente el formulario",
      });
      setIsLoading(false);
    }
  }

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <>
      {showModalMessage && <SuccessMessage isOpen={showModalMessage} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="service"
            render={() => <></>}
          />
          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex w-full flex-col gap-4 lg:flex-row xl:flex-grow"
                  >
                    {projects.map((service: any, index: any) => (
                      <FormItem
                        key={index}
                        className={`relative flex min-h-fit w-full flex-col gap-6 rounded-[10px] bg-transparent text-black-500 lg:w-4/12 xl:min-h-[237px] xl:max-w-[398px]`}
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
                            className="-z-10 rounded-[10px] border-none"
                            value={service.title}
                          />
                        </FormControl>
                        <FormLabel className="h-full cursor-pointer p-6">
                          <div className="flex flex-col gap-2 lg:gap-6">
                            <p
                              className={`${neueThin.className} text-2xl xl:text-3xl`}
                            >
                              {service.title}
                            </p>
                            <p
                              className={`${neueXThin.className} text-xl xl:text-2xl max-w-[320px]`}
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
                className={`${neueThin.className} flex flex-col py-[60px] text-black-500 w-full lg:min-h-[335px] bg-gray-400 rounded-[10px] items-center justify-between`}
              >
                <FormLabel className="text-center text-2xl lg:text-3xl xl:text-[40px]">
                  ¿Tienes un presupuesto aproximado?
                </FormLabel>
                <FormControl>                  
                  <Range
                    className="range-slider"
                    min={minNumber}
                    max={maxNumber}
                    step={5000}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkReference"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-400 px-6 py-12 lg:gap-6 lg:py-[60px]">
                <FormLabel
                  className={`${neueThin.className} text-xl lg:text-2xl xl:text-3xl mb-4 lg:mb-0 xl:leading-[40px]`}
                >
                  En caso de que exista, compártenos tu página actual en la que
                  debamos trabajar. (Si no tienes una, puedes proporcionarnos
                  una referencia de lo que buscas).
                </FormLabel>
                <FormControl>
                  <div className="w-full rounded-[10px] bg-white p-4 lg:w-3/4">
                    <Input
                      className={`${neueThin.className} text-sm lg:text-xl xl:text-2xl`}
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
              <FormItem className="flex w-full flex-col gap-4 overflow-hidden rounded-md bg-gray-400 px-6 py-12 lg:gap-12 lg:py-[60px]">
                <FormLabel
                  className={`${neueThin.className} text-2xl lg:text-3xl xl:text-[40px] leading-none`}
                >
                  También estoy interesado en:
                </FormLabel>

                <div className="m-auto flex w-full flex-col gap-4 lg:flex-row lg:gap-10">
                  {interests.map((item) => (
                    <FormField
                      key={item.pageTitle}
                      control={form.control}
                      name="interest"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.title}
                            className="flex flex-row items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.title)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        item.title,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.title
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel
                              className={`${neueThin.className} text-lg xl:text-2xl font-normal`}
                            >
                              {item.title}
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

          <div className="flex flex-col items-start gap-8 overflow-hidden rounded-md bg-gray-400 px-4 py-4 lg:items-center lg:gap-[110px] lg:px-24 lg:py-24">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-[70px]">
              <div className="h-[155px] w-[239px] bg-flourescentYellow"></div>
              <p
                className={`${neueXThin.className} text-black-500 text-xl xl:text-2xl lg:max-w-[578px] lg:leading-[40px]`}
              >
                Nuestro equipo se pondrá en contacto contigo en las siguientes
                24 horas. La información que nos compartiste nos ayudará a tener
                una mejor idea de lo que buscas y cómo podemos ayudarte.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 lg:flex-row">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormControl>
                        <Input
                          placeholder="Nombre"
                          className="resize-none bg-transparent py-0 text-sm lg:text-lg"
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
                          className="resize-none bg-transparent py-0 text-sm lg:text-lg"
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
                          className="resize-none bg-transparent py-0 text-sm lg:text-lg"
                          {...field}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="group relative flex justify-end">
                {isLoading ? (
                  <>
                    <Button
                      type="submit"
                      className="h-fit w-fit cursor-not-allowed bg-black"
                      disabled={isLoading}
                    >
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Por favor, espere
                    </Button>
                  </>
                ) : (
                  <Button
                    type="submit"
                    className="group relative h-fit w-fit bg-transparent hover:bg-transparent"
                    disabled={isLoading}
                  >
                    <span className="relative z-10 h-fit gap-4 rounded-[15px] bg-flourescentYellow px-12 py-2 text-lg font-normal text-gray-600 hover:bg-black hover:text-white lg:px-[48px] lg:py-[12px] lg:text-xl xl:px-[64px] xl:py-[16px] xl:text-2xl">
                      Enviar
                    </span>

                    <Image
                      className="group-hover:bg-flourescent-yellow absolute left-[50%] top-[10%] hidden h-fit cursor-pointer rounded-full bg-flourescentYellow p-2 transition ease-out group-hover:block group-hover:translate-x-28 lg:block"
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
    </>
  );
}
