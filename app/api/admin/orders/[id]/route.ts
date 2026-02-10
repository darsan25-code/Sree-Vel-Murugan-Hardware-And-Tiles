import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // 🔥 THIS IS THE FIX

    const order = await Order.findByIdAndUpdate(
      id,
      { status: "Delivered" },
      { new: true }
    );

    return NextResponse.json(order);
  } catch (error) {
    console.error("ORDER STATUS UPDATE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}
