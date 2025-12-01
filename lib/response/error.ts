import { NextResponse } from "next/server"

export function errorNextResponse(message: string, status: number) {

    return NextResponse.json(
        { ok: false, error: message },
        { status: status }
    )
}

export function errorResponse(message: string, status: number) {

    return Response.json(
        { ok: false, error: message },
        { status: status }
    )
}