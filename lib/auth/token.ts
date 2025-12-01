import jwt from "jsonwebtoken"

const GUEST_TTL_SECONDS = 60 * 30
const JWT_SECRET = process.env.JWT_SECRET || "dev-guest-secret"

export type GuestTokenPayload = {
    idx: number
    id: string
    role: string
}

export function signGuestToken(payload: GuestTokenPayload): string {

    return jwt.sign(
        payload, 
        JWT_SECRET, 
        {
            expiresIn: GUEST_TTL_SECONDS,
        }
    )
}

export function verifyGuestToken(token: string): GuestTokenPayload | null {

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload

        if(
            typeof decoded.idx === "number" &&
            typeof decoded.id === "string" &&
            typeof decoded.role === "string"
        ) {
            return {
                idx: decoded.idx,
                id: decoded.id,
                role: decoded.role,
            }
        }
        return null
    }catch(error: any) {
        return null
    }
}