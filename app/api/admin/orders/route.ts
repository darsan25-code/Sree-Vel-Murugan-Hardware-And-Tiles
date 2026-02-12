import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

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
  } catch (error) {
    console.error("FETCH ORDERS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
