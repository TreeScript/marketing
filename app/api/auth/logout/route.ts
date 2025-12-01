import { NextRequest, NextResponse } from "next/server"
import { verifyGuestToken } from "@/lib/auth/token"
import { deleteGuestByIdx } from "@/lib/db/guest"

const GUEST_TOKEN_COOKIE = "kihoon_app_guest_token"

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get(GUEST_TOKEN_COOKIE)?.value

        if(token) {
            const payload = verifyGuestToken(token)
            if(payload && payload.role === "guest") {
                await deleteGuestByIdx(payload.idx)
            }
        }

        const result = NextResponse.json({ ok: true }, { status: 200 })

        result.cookies.set(GUEST_TOKEN_COOKIE, "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0
        })

        return result
    }catch(error: any) {
        console.error(`[POST /api/auth/logout] error: ${error}`)

        const result = NextResponse.json(
            { ok: false, message: "로그아웃 처리 중 오류가 발생했습니다." },
            { status: 500 }
        )

        result.cookies.set(GUEST_TOKEN_COOKIE, "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0
        })

        return result
    }
}