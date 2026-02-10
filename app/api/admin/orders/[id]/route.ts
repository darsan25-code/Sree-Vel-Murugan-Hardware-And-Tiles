import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // 👈 IMPORTANT

    const order = await Order.findByIdAndUpdate(
      id,
      { status: "Delivered" },
      { new: true }
    );

    return NextResponse.json(order);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}
