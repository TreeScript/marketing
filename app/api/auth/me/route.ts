import { NextRequest, NextResponse } from "next/server"
import { verifyGuestToken } from "@/lib/auth/token"

export async function GET(request: NextRequest) {

    // const GUEST_TOKEN_COOKIE = process.env.GUEST_TOKEN
    const token = request.cookies.get("kihoon_app_guest_token")?.value
    if(!token) {
        return NextResponse.json({ user: null }, { status: 200 })
    }

    try {
        const payload = verifyGuestToken(token)

        if(!payload) {
            return NextResponse.json({ user: null }, { status: 200 })
        }

        const user = {
            id: payload.id,
            email: "",
            role: payload.role
        }


        return NextResponse.json({ user }, { status: 200 })
    }catch(error: any) {
        return NextResponse.json({ user: null }, { status: 500 })
    }
}