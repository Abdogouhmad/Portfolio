import { NextResponse, type NextRequest } from "next/server";

/**
 * Keep old capitalised project URLs working without a redirect loop.
 *
 * Next.js `redirects()` sources are matched case-insensitively, so a config
 * rule from `/projects/Walt` also matches `/projects/walt` and redirects it to
 * itself forever. Middleware sees the real pathname, so this comparison is
 * case-sensitive.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPathname = pathname.toLowerCase();

  if (pathname !== normalizedPathname) {
    const url = request.nextUrl.clone();
    url.pathname = normalizedPathname;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/projects/:path*",
};
