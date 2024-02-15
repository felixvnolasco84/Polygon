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
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { neueThin } from "@/styles/fonts";
import { sendContactEmail } from "@/app/_actions";
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
});

export function HeroContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
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
          className={`${neueThin.className} flex w-full flex-col lg:items-center gap-2 rounded-2xl max-w-none lg:max-w-[80%]`}
        >
          <div className="flex w-full flex-col gap-2 lg:flex-row lg:rounded-2xl lg:text-black-500">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full rounded-md bg-gray-400 lg:w-1/2 lg:p-1 xl:p-2">
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      className="resize-none border-b-0 bg-transparent px-1 py-0 text-base xl:text-lg"
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
                <FormItem className="w-full rounded-md bg-gray-400 lg:w-1/2 lg:p-1 xl:p-2">
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="resize-none border-b-0 bg-transparent px-1 py-0 text-base xl:text-lg"
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
            <Button
              type="submit"
              variant={"CTAHero"}
              size={"lg"}
              disabled={isLoading}
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Por favor, espere
            </Button>
          ) : (
            <Button
              type="submit"
              variant={"CTAHero"}
              disabled={isLoading}
              size={"lg"}
            >
              <span>Agenda tu consultoría gratuita</span>
            </Button>
          )}
          <span>No compartimos tu info con nadie.</span>
        </form>
      </Form>
    </>
  );
}
