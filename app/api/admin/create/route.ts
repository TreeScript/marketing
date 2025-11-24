import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { getServiceDataSource } from "@/lib/db/service/serviceDataSource"
import { AdminUser } from "@/lib/db/service/entities/AdminUser"
import errorResponse from "@/lib/response/error"

export async function POST(request: Request) {
    try {
        const { admin_id, password } = await request.json()

        console.log(`콘솔 확인 ${admin_id}, ${password}`)
        
        if(!admin_id || !password) {
            return errorResponse("admin계정과 password를 입력해주세요.", 400)
        }
        
        const dataSource = await getServiceDataSource()
        const adminUserRepo = dataSource.getRepository(AdminUser)

        const exists = await adminUserRepo.findOne({ where: { admin_id } })
        console.log("에러 로그 확인1")
        if(exists) {
            return errorResponse("이미 존재하는 관리자 계정입니다.", 400)
        }

        const hash = await bcrypt.hash(password, 10)
        const admin = adminUserRepo.create({
            admin_id,
            password_hash: hash,
            role: "superadmin",
        })

        await adminUserRepo.save(admin)
        console.log("에러 로그 확인2")
        return NextResponse.json({ ok: true, admin_id: admin.id })
    }catch(error: any) {
        return errorResponse(error.message, 500)
    }
}