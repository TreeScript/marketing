import { NextResponse } from "next/server"
import { getServiceDataSource } from "@/lib/db/service/serviceDataSource"
import { AdminUser } from "@/lib/db/service/entities/AdminUser"
import { AdminSession } from "@/lib/db/service/entities/AdminSession"
import { errorResponse } from "@/lib/response/error"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function POST(request: Request) {
    try {
        const { admin_id, password } = await request.json()
        if(!admin_id || !password) {
            return errorResponse("관리자 아이디와 비밀번호를 입력해주세요.", 400)
        }

        const dataSource = await getServiceDataSource()
        const adminUserRepo = dataSource.getRepository(AdminUser)
        const adminSessionRepo = dataSource.getRepository(AdminSession)

        const admin = await adminUserRepo.findOne({ where: { admin_id } })
        if(!admin) {
            return errorResponse("존재하지 않는 계정입니다.", 401)
        }
        
        const match = await bcrypt.compare(password, admin.password_hash)
        if(!match) {
            return errorResponse("비밀번호가 일치하지 않습니다.", 400)
        }

        const sessionToken = crypto.randomUUID()
        const expiresAt = new Date()
        expiresAt.setHours(expiresAt.getHours() + 24)

        console.log(`서버: 어드민세션 체크`)
        console.log(`AdminID: ${admin_id} sesssionToken: ${sessionToken}, expires_at: ${expiresAt}`)
        const admimSession = adminSessionRepo.create({
            admin: admin,
            session_token: sessionToken,
            expires_at: expiresAt
        })
        await adminSessionRepo.save(admimSession)

        const response = NextResponse.json({
            ok: true,
            message: "로그인 성공",
        })

        response.cookies.set({
            name: "admin_session",
            value: sessionToken,
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "lax",
        })

        return response
    }catch(error: any) {
        console.log(`ADMIN ERROR: ${error}`)
        return errorResponse(error.response, 500)
    }
}