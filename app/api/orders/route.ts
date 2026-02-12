import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";


// 🔐 GET → Only return orders for given phone number
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    // 🚫 If no phone provided → return empty
    if (!phone) {
      return NextResponse.json([]);
    }

    const orders = await Order.find({
      "customer.phone": phone,
    }).sort({ createdAt: -1 });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("GET ORDERS ERROR:", error);
    return NextResponse.json([], { status: 500 });
  }
}


// 🛒 POST → Create new order
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body?.customer || !body?.items?.length) {
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
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return NextResponse.json(
      { error: "Order failed" },
      { status: 500 }
    );
  }
}
