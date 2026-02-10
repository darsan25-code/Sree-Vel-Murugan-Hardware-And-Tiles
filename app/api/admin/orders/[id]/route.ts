import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await context.params;

  const order = await Order.findByIdAndUpdate(
    id,
    { status: "Delivered" },
    { new: true }
  );

  return NextResponse.json(order);
}
