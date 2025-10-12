import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/.well-known")) {
    return new NextResponse("Not Found", { status: 404 });
  }
  return NextResponse.next();
}
