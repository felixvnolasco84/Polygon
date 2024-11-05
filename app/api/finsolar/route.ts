import { NextResponse } from "next/server";

const twilio = require("twilio");

export const POST = async (req: any) => {
  try {
    //SEND WHATSAPP MESSAGE
    const accountSID = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = new twilio(accountSID, authToken);

    console.log(req.body);

    // Envía el mensaje
    client.messages
      .create({
        body: "¡Hola! Este es un mensaje enviado desde la API de WhatsApp de Twilio.",
        from: "whatsapp:+525578136020", // Este es un número de WhatsApp de Twilio
        to: "whatsapp:+525578136020", // Reemplázalo con el número de WhatsApp del destinatario
      })
      .then((message: any) => {
        console.log("Mensaje enviado con SID: " + message.sid);
        return NextResponse.json(JSON.stringify(message));        
      } )
      .catch((error: any) => {
        console.log(error);
        return NextResponse.json(JSON.stringify({ message: error }));
      });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};