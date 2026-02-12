import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_EMAIL = "admin@sreevelmurugan.com";
const ADMIN_PASSWORD = "123456"; // change later

export async function POST(req: Request) {
  const body = await req.json();

  if (
    body.email === ADMIN_EMAIL &&
    body.password === ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
