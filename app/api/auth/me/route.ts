import { NextRequest, NextResponse } from "next/server"
import { verifyGuestToken } from "@/lib/auth/token"
import { touchGuestActivity } from "@/lib/db/guest"
import { GuestUser } from "@/lib/db/entities/GuestUser"

type guestActivity = {
    expired: boolean
    guest: GuestUser
}

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

        const { expired, guest } = await touchGuestActivity(payload.idx)
        if(expired || !guest) {
            const result = NextResponse.json({ user: null }, { status: 200 })
            result.cookies.set("kihoon_app_guest_token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 0,
            })

            return result
        }

        const user = {
            id: payload.id,
            email: "",
            role: payload.role
        }

        return NextResponse.json({ user }, { status: 200 })
    }catch(error: any) {
        const result = NextResponse.json({ user: null }, { status: 200 })
        result.cookies.set("kihoon_app_guest_token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0
        })

        return result
    }
}