import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Allow the root path
  if (pathname === '/') {
    return NextResponse.next()
  }

  // 2. Allow static files (images, fonts, etc) and Next.js internals
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/static') || 
    pathname.match(/\.(.*)$/) // matches anything with an extension like .png, .ico, etc
  ) {
    return NextResponse.next()
  }

  // 3. Optional: Allow the /api/send route if you want to keep receiving leads 
  // from the Under Construction page (though we removed the form there, it might be safer to keep APIs)
  if (pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // 4. Redirect everything else to the homepage
  return NextResponse.redirect(new URL('/', request.url))
}

// Ensure middleware running on all paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
