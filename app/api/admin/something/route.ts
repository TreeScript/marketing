import { cookies } from "next/headers"
import { getServiceDataSource } from "@/lib/db/service/serviceDataSource"
import { AdminSession } from "@/lib/db/service/entities/AdminSession"
import { errorResponse } from "@/lib/response/error"

export async function GET() {
    
    const token = cookies().get("admin_session")?.value
    if(!token) return errorResponse("Unauthorized", 401)

    const dataSource = await getServiceDataSource()
    const repo = dataSource.getRepository(AdminSession)

    const session = await repo.findOne({ 
        where: { session_token: token }, 
        relations: ["admin"] 
    })
    if(!session) return errorResponse("Invalid Session", 401)

    if(new Date(session.expires_at) < new Date()) {
        return errorResponse("Expired", 401)
    }

    return Response.json({ ok: true })
}