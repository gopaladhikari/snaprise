import {
  NextResponse,
  type NextRequest,
  type MiddlewareConfig,
} from "next/server";

export const middleware = (req: NextRequest) => {
  console.log("Middleware called", req.nextUrl.pathname);

  return NextResponse.next();
};

export const config: MiddlewareConfig = {
  matcher: ["/", "/login", "/register", "/forgot-password"],
};
