import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const order = await Order.create({
      customer: body.customer,
      items: body.items,
      total: body.total,
      status: "Pending",
    });

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error("ORDER CREATE ERROR:", err);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}
