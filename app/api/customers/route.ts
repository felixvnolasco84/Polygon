import { NextResponse } from "next/server";
import prisma from "@/utils/ConnectionPool";

// CREATE A CUSTOMER
export const POST = async (req: any) => {
  try {
    const body = await req.json();
    const customer = await prisma.customer.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(customer));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
