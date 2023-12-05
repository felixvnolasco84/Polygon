// import { NextResponse } from "next/server";
// import prisma from "@/utils/ConnectionPool";

// // CREATE A QUOTE
// export const POST = async (req: any) => {
//   try {
//     const body = await req.json();
//     console.log(body);
//     // const quote = await prisma.quote.create({
//     //   data: { ...body },
//     // });

//     // return new NextResponse(JSON.stringify(quote));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" })
//     );
//   }
// };
