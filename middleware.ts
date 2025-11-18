import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_PATHS = [
    '/auth',
    '/api/auth',
    '/api/db',
    '/_next/static', 
    '/_next/image', 
    '/favicon.ico',
]

const GUEST_TOKEN_COOKIE = "kihoon_app_guest_token"
const SESSION_COOKIE = "session"

function isPublishPath(pathname: string) {
    return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl
    if(isPublishPath(pathname)) return NextResponse.next()

    const guestToken = request.cookies.get(GUEST_TOKEN_COOKIE)?.value
    const session = request.cookies.get(SESSION_COOKIE)?.value

    if(!session && !guestToken) {
        const url = request.nextUrl.clone()
        url.pathname = '/auth/login'
        url.searchParams.set('redirect', pathname)
        
        return NextResponse.redirect(url)
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}