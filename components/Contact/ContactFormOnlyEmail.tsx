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
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

const FormSchema = z.object({
  email: z.string().email({ message: "Correo electrónico Inválido" }),
});

export function ContactFormOnlyEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  const { toast } = useToast();

  const router = useRouter(); 

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      const response = await sendContactEmail(data);
      if (response.success) {
        setShowModalMessage(true);
        router.push("/thankyou");
        sendGTMEvent({
          event: "conversion_event_submit_lead_form"
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "OH!",
        description: "No se ha enviado correctamente el formulario",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      {showModalMessage && <SuccessMessage type="contact" />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`${neueThin.className} flex items-center rounded-full bg-black opacity-60 hover:opacity-100 px-3 lg:px-4 py-1.5 transition-opacity`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-fit space-y-0">
                <FormControl>
                  <Input
                    placeholder="Correo..."
                    className="h-fit resize-none border-none bg-transparent px-1 py-0 text-base leading-none text-white placeholder:text-sm placeholder:text-white autofill:bg-transparent focus:bg-transparent lg:text-lg"
                    disabled={isLoading}
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex h-fit w-full items-center gap-2 rounded-full bg-white px-0 py-1.5 text-[#000000] hover:bg-[#F7F7F7] hover:text-[#000000] lg:w-fit lg:px-12 lg:py-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <p className="text-sm">Agenda tu sesión gratuita</p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
