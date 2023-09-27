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
import { toast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";
import rightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

import { useToast } from "@/components/ui/use-toast"


const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe de ser de al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede ser más de 160 carácteres.",
    }),
  mail: z.string().email({ message: "Correo electrónico Inválido" }),
  phoneNumber: z.string().regex(phoneRegex, "Número de Teléfono Inválido"),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);  
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mail: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      // Convert the data object to JSON
      const jsonData = JSON.stringify(data);

      // Define the URL where you want to send the POST request
      const url = "https://polygon-backend.vercel.app/client"; // Replace with your actual API endpoint

      // Define the request options including method, headers, and body
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: jsonData, // Pass the JSON data as the request body
      };

      // Send the POST request using the Fetch API
      const response = await fetch(url, requestOptions);

      // Check if the response status is OK (HTTP 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse the response JSON
        console.log("POST request successful:", responseData);        
        toast({
          variant: "successFormMessage",
          title: "HEY!",
          description: "Se ha enviado correctamente el formulario",
        })
        setIsLoading(false);
      } else {
        // Handle error cases
        console.error("POST request failed with status:", response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center w-2/3 rounded-2xl gap-5"
      >
        <div className="flex bg-gray-400 p-4 gap-8 rounded-2xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <Input
                    placeholder="Nombre"
                    className="bg-transparent resize-none py-0"
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
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Correo"
                    className="bg-transparent resize-none py-0"
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
                    className={"bg-transparent resize-none py-0"}
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
              className="bg-black hover:bg-transparent w-fit h-fit"
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
      </form>
    </Form>
  );
}
