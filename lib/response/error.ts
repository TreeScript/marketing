import { NextResponse } from "next/server"

export default function errorResponse(message: string, status: number) {

    return NextResponse.json(
        { ok: false, error: message },
        { status: status }
    )
}