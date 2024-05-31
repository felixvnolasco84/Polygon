"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import rightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { phoneRegex } from "@/components/Regex/Regex";
import { neueThin } from "@/styles/fonts";
import { sendContactEmail, sendEmail } from "@/app/_actions";
import SuccessMessage from "./SuccessMessage";

const FormSchema = z.object({
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

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      await sendContactEmail(data);
      const response = await fetch("/api/customers", {
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

  return (
    <>
      {showModalMessage && <SuccessMessage type="contact" />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`${neueThin.className} flex w-full flex-col lg:items-center gap-5 rounded-2xl lg:w-10/12 xl:w-8/12 lg:flex-row`}
        >
          <div className="flex w-full flex-col gap-8 bg-transparent lg:flex-row lg:rounded-2xl lg:bg-gray-400 lg:px-4 lg:py-2 lg:text-black-500">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      className="resize-none bg-transparent px-1 py-0 text-base lg:text-lg"
                      disabled={isLoading}
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
                      className="resize-none bg-transparent px-1 py-0 text-base lg:text-lg"
                      disabled={isLoading}
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
                      className={
                        "resize-none bg-transparent px-1 py-0 text-base lg:text-lg"
                      }
                      disabled={isLoading}
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isLoading ? (
            <>
              <Button
                type="submit"
                className="h-fit w-fit bg-black hover:bg-transparent"
                disabled={isLoading}
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Por favor, espere
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              variant={"ghost"}
              className="bg-gray-400 px-12 py-4 text-black hover:bg-gray-900 hover:text-white lg:px-[48px] lg:py-[12px] lg:text-xl xl:px-[64px] xl:py-8 xl:text-2xl"
              // className="lg:group relative h-fit w-fit bg-transparent px-0 py-2 hover:bg-transparent lg:py-2"
              disabled={isLoading}
            >
              Enviar
              {/* <span className="relative z-10 h-fit gap-4 rounded-[15px] bg-flourescentYellow px-12 py-4 text-xl font-normal text-gray-600 hover:bg-black hover:text-white lg:px-[48px] lg:py-[12px] lg:text-xl xl:px-[64px] xl:py-[16px] xl:text-2xl">
                Enviar
              </span>

              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                
                loading="eager"
                className="group-hover:bg-flourescent-yellow absolute left-[50%] top-[10%] hidden h-fit cursor-pointer rounded-full bg-flourescentYellow p-2 transition ease-out group-hover:block group-hover:translate-x-28 lg:block"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              /> */}
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}
