import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const order = await Order.create({
      ...body,
      status: "Pending",
      createdAt: new Date(),
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

// My Orders (phone based)
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json([], { status: 200 });
    }

    const orders = await Order.find({
      "customer.phone": phone,
    }).sort({ createdAt: -1 });

    return NextResponse.json(orders);
  } catch (err) {
    console.error("GET ORDERS ERROR:", err);
    return NextResponse.json([], { status: 500 });
  }
}
