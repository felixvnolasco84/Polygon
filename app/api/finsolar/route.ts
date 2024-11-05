import { NextResponse } from "next/server";

const twilio = require("twilio");

export const POST = async (req: any) => {
  try {
    //SEND WHATSAPP MESSAGE
    const accountSID = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const templateSID = process.env.WHATSAPP_TEMPLATE_SID;

    const client = new twilio(accountSID, authToken);

    console.log(req.body);

    // Envía el mensaje
    await client.messages
      .create({
        contentSid: templateSID,
        from: "whatsapp:+5215564598976", // Este es un número de WhatsApp de Twilio
        to: "whatsapp:+525543897808", // Reemplázalo con el número de WhatsApp del destinatario
      })
      .then((message: any) => {
        console.log("Mensaje enviado con SID: " + message.sid);
        return new NextResponse(JSON.stringify({ message: message }));
      })
      .catch((error: any) => {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: error }));
      });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};