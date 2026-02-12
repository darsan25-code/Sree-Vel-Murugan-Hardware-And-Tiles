import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

/* ================= DELETE ================= */

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const deleted = await Order.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}

/* ================= PATCH (Mark as Shipped) ================= */

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const updated = await Order.findByIdAndUpdate(
      id,
      { status: "Shipped" },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PATCH ERROR:", error);
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}
