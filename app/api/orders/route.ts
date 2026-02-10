import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// 📦 CREATE ORDER (Checkout → Place Order)
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.customer || !body.items || !body.total) {
      return NextResponse.json(
        { error: "Invalid order data" },
        { status: 400 }
      );
    }

    const order = await Order.create({
      customer: body.customer,
      items: body.items,
      total: body.total,
      status: "Pending",
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error: any) {
    console.error("ORDER CREATE ERROR:", error.message);

    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}

// 📄 GET ORDERS (Customer – phone based)
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number required" },
        { status: 400 }
      );
    }

    const orders = await Order.find({
      "customer.phone": phone,
    }).sort({ createdAt: -1 });

    return NextResponse.json(orders);
  } catch (error: any) {
    console.error("ORDER FETCH ERROR:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
