import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const order = await Order.findByIdAndUpdate(
      params.id,
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
