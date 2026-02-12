import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_EMAIL = "admin@sreevelmurugan.com";
const ADMIN_PASSWORD = "123456";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: false,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
