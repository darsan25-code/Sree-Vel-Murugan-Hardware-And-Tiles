import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// 📥 CREATE ORDER
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const order = await Order.create({
    ...body,
    status: "Pending",
    createdAt: new Date(),
  });

  return NextResponse.json(order, { status: 201 });
}

// 📤 GET ORDERS
export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const phone = searchParams.get("phone");

  // 🧑‍💼 ADMIN → all orders
  if (!phone) {
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json(orders);
  }

  // 👤 CUSTOMER → phone based
  const orders = await Order.find({
    "customer.phone": phone,
  }).sort({ createdAt: -1 });

  return NextResponse.json(orders);
}
