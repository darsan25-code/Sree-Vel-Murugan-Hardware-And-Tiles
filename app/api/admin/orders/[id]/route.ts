import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  // 🔥 IMPORTANT
  const { id } = await context.params;

  const order = await Order.findByIdAndUpdate(
    id,
    { status: "Delivered" },
    { new: true }
  );

  if (!order) {
    return NextResponse.json(
      { error: "Order not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(order);
}
