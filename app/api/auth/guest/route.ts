import { NextRequest, NextResponse } from "next/server"
import { createGuest } from "@/lib/db/guest"
import { signGuestToken } from "@/lib/auth/token"

const GUEST_TOKEN_COOKIE = "kihoon_app_guest_token"
const GUEST_TTL_SECONDS = 60 * 30

export async function POST(request: NextRequest) {
    try {
        const userAgent = request.headers.get("uset-agent") ?? undefined

        const forwardedFor = request.headers.get("x-forwarded-for")
        const ipAddress = forwardedFor
            ? forwardedFor.split(",")[0].trim()
            : undefined

        const guest = await createGuest({
            userAgent,
            ipAddress
        })

        const token = signGuestToken({
            idx: guest.idx,
            id: guest.id,
            role: guest.role
        })

        const reqCreateGuestData = {
            body: {
                id: guest.id,
                role: guest.role,
            },
            status: { status: 200 }
        }

        const result = NextResponse.json(reqCreateGuestData.body, reqCreateGuestData.status)

        result.cookies.set(GUEST_TOKEN_COOKIE, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: GUEST_TTL_SECONDS
        })

        return result
    }catch(error) {
        console.error("[POST /api/auth/geust] error", error)

        return NextResponse.json(
            { message: "게스트 로그인 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
            { status: 500 }
        )
    }
}