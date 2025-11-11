import { NextResponse, NextRequest } from "next/server"

const PUBLIC_PATHS = [
    '/auth',
    '/api/auth',
    '/api/db',
    '/_next/static', '/_next/image', '/favicon.ico',
]

function isPublishPath(pathname: string) {
    return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl
    if(isPublishPath(pathname)) return NextResponse.next()

    const session = request.cookies.get('session')?.value
    if(!session) {
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