import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const ADMIN_PUBLIC_PATHS = [
    "/admin/login",
    "/amdin/api/login",
]

const PUBLIC_PATHS = [
    '/auth',
    '/api/auth',
    '/api/db',
    '/api/admin/create',
    '/_next/static', 
    '/_next/image', 
    '/favicon.ico',
]

const GUEST_TOKEN_COOKIE = "kihoon_app_guest_token"
const SESSION_COOKIE = "session"
const COOKIE_ADMIN = "admin_session"

function isPublishPath(pathname: string) {
    return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

function matchPublic(pathname: string, list: string[]) {
    return list.some((p) => pathname === p || pathname.startsWith(p + "/"))
}

export async function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl
    if(pathname.startsWith("/admin")) {
        if(matchPublic(pathname, ADMIN_PUBLIC_PATHS)) {
            return NextResponse.next()
        }

        const adminToken = request.cookies.get(COOKIE_ADMIN)?.value
        if(!adminToken) {
            const url = request.nextUrl.clone()
            url.pathname = "/admin/login"
            url.searchParams.set("redirect", pathname)
            
            return NextResponse.redirect(url)
        }
        return NextResponse.next()
    }

    if(!matchPublic(pathname, PUBLIC_PATHS)) {
        const guest = request.cookies.get(GUEST_TOKEN_COOKIE)?.value
        const session = request.cookies.get(SESSION_COOKIE)?.value

        if (!session && !guest) {
            const url = request.nextUrl.clone()
            url.pathname = "/auth/login"
            url.searchParams.set("redirect", pathname)
            return NextResponse.redirect(url)
        }

        return NextResponse.next()
    }
    

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