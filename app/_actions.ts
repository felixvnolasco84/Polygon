"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/emails/emails/contact-form-email";
import SimpleContactEmail from "@/emails/emails/simple-contact-email";

export async function addEntry(data: any) {
  const result = data;

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

const resend = new Resend("re_SWujrBS8_LVE4q4EQnF9F6wJvqtz7Q7fM");

export async function sendEmail(data: any) {
  const { name, email, phoneNumber, service, project, budget, interest } = data;
  console.log(data);
  try {
    const data = await resend.emails.send({
      from: "hola@polygonag.com",
      to: ["hola@polygonag.com"],
      subject: "Nuevo contacto",
      react: ContactFormEmail({
        name,
        email,
        phoneNumber,
        service,
        project,
        budget,
        interest,
      }),
    });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}

export async function sendContactEmail(data: any) {
  const { name, email, phoneNumber } = data;
  try {
    const data = await resend.emails.send({
      from: "hola@polygonag.com",
      to: ["hola@polygonag.com"],
      subject: "Nuevo contacto",
      react: SimpleContactEmail({
        name,
        email,
        phoneNumber,
      }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}
